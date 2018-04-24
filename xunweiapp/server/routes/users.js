var express = require('express');
var fs=require('fs');
var router = express.Router();
var util = require('./../utils/util');
var formidable=require('formidable');
var AVATAR_UPLOAD_FOLDER='/uploads/personal/';
var jwt=require('jwt-simple');
var moment = require('moment');
var userdao = require('./../dao/userDAO').userDao;
var ck = require('./../utils/checkToken').checkToken;

router.post('/login', function (req, res, next) {
    var user = req.body;
    if (user) {
        userdao.getPasswordById(user.telephone, function (result) {
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                if (result.length == 0) {
                    res.json({"stateCode": 3});
                } else {
                    if (result[0].password == util.MD5(user.password)) {
                        var name = result[0].name;
                        var datetime = result[0].usertime;
                        var icon = result[0].icon;
                        //产生令牌
                        var expires = moment().add(5,'day').valueOf();
                        var token = jwt.encode({
                            iss: user.telephone,
                            exp: expires
                        },util.secret);
                        res.json({"stateCode": 1,"token": token,"telephone":user.telephone,"name":name,"datetime":datetime,"icon":icon});
                    } else {
                        res.json({"stateCode": 2});
                    }
                }
            }
        })
    }
});
router.post('/regist', function (req, res, next) {
    var user = req.body;
    if (user) {
        userdao.addUser(user, function (result) {
            if(result=='e004'){
                res.json({"stateCode": result});
            }else if (result == '0' || result == '5') {
                res.json({"stateCode": 0});
            }else{
                var datetime = result[0].usertime;
                var expires = moment().add(5, "HH").valueOf();
                var token = jwt.encode({
                    iss: user.telephone,
                    exp: expires
                },util.secret);
                res.json({"stateCode": 1,"token": token,"datetime":datetime});
            }
        })
    }
});

router.post('/edit',ck,function (req,res,next) {
        var user = req.body;
        if (user) {
        userdao.editUser(user, function (result) {
            if(result=='e004'){
                res.json({"stateCode": result});
            }
            else if (result == '0' || result == '2') {
                res.json({"stateCode": 2});
            }else {
                res.json({"stateCode": 1});
            }

        })
    }
});
router.post('/editpass',ck,function (req,res,next) {
    var user = req.body;
    if (user) {
        userdao.editUserpass(user, function (result) {
            if(result=='e004'){
                res.json({"stateCode": result});
            }else {
                if (result == '1') {
                    res.json({"stateCode": 1});
                }
                if (result == '0' || result == '2') {
                    res.json({"stateCode": 2});//密码一样
                }
            }
        })
    }
});
router.post('/sms',function (req,res,next) {
    var user=req.body;
    if (user){
        userdao.sendSms(user.telephone,function (result) {
            if(result=='2'){
                res.json({"messageCode":2});//用户已存在，返回一个状态码
            }else {
                res.json({"messageCode":result});//用户不存在，返回code
            }
        })
    }
})
router.post('/getUserIcon', function (req, res, next) {
    var user_telephone=req.body.telephone;
    userdao.getUserIcon(user_telephone,function (result) {
        if(result.length==0){
            res.json({"icon":"0.jpg"});
        }else {
            res.json({"icon":result[0].icon});
        }
    })
});
router.post('/upload',function (request, response, next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    form.parse(request, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            response.json({"stateCode":'e005'});
            return;
        }
        var extName = '';  //后缀名
        switch (files.user_icon.type) {
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            response.json({"stateCode":'e005'});
            return;
        }
        else{
            form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 2 * 1024;   //文件大小
            var avatarName = util.createUnique() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            var readStream=fs.createReadStream(files.user_icon.path);
            var writeStream=fs.createWriteStream(newPath);
            readStream.pipe(writeStream);
            readStream.on('end',function(){
                fs.unlinkSync(files.user_icon.path);
            });
            userdao.addUserIcon(fields.telephone,avatarName,function (result) {
                if(result=='0'){
                    fs.unlinkSync(newPath);
                    response.json({"stateCode":0});
                }else if(result=='e004'){
                    fs.unlinkSync(newPath);
                    response.json({"stateCode":'e004'});
                }else {
                    if(result.length==0){
                        response.json({"icon":"0.jpg"});
                    }else {
                        response.json({"icon":result[0].icon});
                    }
                }
            })
        }
    })
});
module.exports = router;
