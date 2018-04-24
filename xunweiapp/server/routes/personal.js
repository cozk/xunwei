var express = require('express');
var fs=require('fs');
var router = express.Router();
var util = require('./../utils/util');
var formidable=require('formidable');
var AVATAR_UPLOAD_FOLDER='/uploads/cookbook/';
var jwt=require('jwt-simple');
var moment = require('moment');
var personaldao = require('./../dao/personalDAO').personalDao;
var ck = require('./../utils/checkToken').checkToken;

 router.post('/work',function (req,res,next) {
     var user = req.body;
     if (user) {
         personaldao.getWork(user.telephone,function (result) {
             if (result == 'e004') {
                 res.json({"stateCode": result});
             } else {
                 res.json(result);
             }
         })
     }
 })
router.post('/comm',function (req,res,next) {
    var user = req.body;
    console.log(user);
    if (user) {
        personaldao.getComm(user.pinglunid,function (result) {
            console.log(result);
            if (result == 'e004') {
                res.json({"stateCode": result});
            } else {
                res.json(result);
            }
        })
    }
})
function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
        jsonLength++;
    }
    return jsonLength;

}
router.post('/uploadc',function (request, response, next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    form.parse(request, function (err, fields, files) {
        var len = getJsonLength(files);
        if (err) {
            response.locals.error = err;
            response.json({"stateCode":'e005'});
            return;
        }
        var flag0 = 0;
        var extName0 = '';  //后缀名
        var avatarName0 = '';//上传的文件名
        var newPath0= '';
        if(flag0<len)
        {
            switch (files.user_icon0.type) {
                case 'image/jpeg':
                    extName0 = 'jpeg';
                    break;
                case 'image/jpg':
                    extName0 = 'jpg';
                    break;
                case 'image/png':
                    extName0 = 'png';
                    break;
                case 'image/x-png':
                    extName0 = 'png';
                    break;
            }
            if(extName0.length == 0){//没有上传图片
                response.json({"stateCode":'e005'});
                return;
            }
            else {
                form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                avatarName0 = util.createUnique() + '.' + extName0;
                var newPath0 = form.uploadDir + avatarName0;
                var readStream0=fs.createReadStream(files.user_icon0.path);
                var writeStream0=fs.createWriteStream(newPath0);
                readStream0.pipe(writeStream0);
                readStream0.on('end',function(){
                    fs.unlinkSync(files.user_icon0.path);
                });
            }
        }

        //-------------------------
        var flag1 = 1;
        var extName1 = '';  //后缀名
        var avatarName1 = '';//上传的文件名
        var newPath1= '';
        if(flag1<len)
        {
            switch (files.user_icon1.type) {
                case 'image/jpeg':
                    extName1 = 'jpeg';
                    break;
                case 'image/jpg':
                    extName1 = 'jpg';
                    break;
                case 'image/png':
                    extName1 = 'png';
                    break;
                case 'image/x-png':
                    extName1 = 'png';
                    break;
            }
            if(extName1.length == 0){//没有上传图片
                response.json({"stateCode":'e005'});
                return;
            }
            else {
                form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                avatarName1 = util.createUnique() + '.' + extName1;
                var newPath1 = form.uploadDir + avatarName1;
                var readStream1=fs.createReadStream(files.user_icon1.path);
                var writeStream1=fs.createWriteStream(newPath1);
                readStream1.pipe(writeStream1);
                readStream1.on('end',function(){
                    fs.unlinkSync(files.user_icon1.path);
                });
            }
        }

        //---------------------
        var flag2 = 2;
        var extName2 = '';  //后缀名
        var avatarName2 = '';//上传的文件名
        var newPath2= '';
        if(flag2<len) {
            switch (files.user_icon2.type) {
                case 'image/jpeg':
                    extName2 = 'jpeg';
                    break;
                case 'image/jpg':
                    extName2 = 'jpg';
                    break;
                case 'image/png':
                    extName2 = 'png';
                    break;
                case 'image/x-png':
                    extName2 = 'png';
                    break;
            }
            if(extName2.length == 0){//没有上传图片
                response.json({"stateCode":'e005'});
                return;
            }
            else {
                form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                avatarName2 = util.createUnique() + '.' + extName2;
                var newPath2 = form.uploadDir + avatarName2;
                var readStream2=fs.createReadStream(files.user_icon2.path);
                var writeStream2=fs.createWriteStream(newPath2);
                readStream2.pipe(writeStream2);
                readStream2.on('end',function(){
                    fs.unlinkSync(files.user_icon2.path);
                });
            }
        }
        //---------------
        var flag3 = 3;
        var extName3 = '';  //后缀名
        var avatarName3 = '';//上传的文件名
        var newPath3= '';
        if(flag3<len){
            switch (files.user_icon3.type) {
                case 'image/jpeg':
                    extName3 = 'jpeg';
                    break;
                case 'image/jpg':
                    extName3 = 'jpg';
                    break;
                case 'image/png':
                    extName3 = 'png';
                    break;
                case 'image/x-png':
                    extName3 = 'png';
                    break;
            }
            if(extName3.length == 0){//没有上传图片
                response.json({"stateCode":'e005'});
                return;
            }
            else {
                form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                avatarName3 = util.createUnique() + '.' + extName3;
                var newPath3 = form.uploadDir + avatarName3;
                var readStream3=fs.createReadStream(files.user_icon3.path);
                var writeStream3=fs.createWriteStream(newPath3);
                readStream3.pipe(writeStream3);
                readStream3.on('end',function(){
                    fs.unlinkSync(files.user_icon3.path);
                });
            }
        }

        //----------------------
        var flag4 = 4;
        var extName4 = '';  //后缀名
        var avatarName4 = '';//上传的文件名
        var newPath4= '';
        if(flag4<len){
            switch (files.user_icon4.type) {
                case 'image/jpeg':
                    extName4 = 'jpeg';
                    break;
                case 'image/jpg':
                    extName4 = 'jpg';
                    break;
                case 'image/png':
                    extName4 = 'png';
                    break;
                case 'image/x-png':
                    extName4 = 'png';
                    break;
            }
            if(extName4.length == 0){//没有上传图片
                response.json({"stateCode":'e005'});
                return;
            }
            else {
                form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                avatarName4 = util.createUnique() + '.' + extName4;
                var newPath4 = form.uploadDir + avatarName4;
                var readStream4=fs.createReadStream(files.user_icon4.path);
                var writeStream4=fs.createWriteStream(newPath4);
                readStream4.pipe(writeStream4);
                readStream4.on('end',function(){
                    fs.unlinkSync(files.user_icon4.path);
                });
            }
        }

        //---------------------
        var flag5 = 5;
        var extName5 = '';  //后缀名
        var avatarName5 = '';//上传的文件名
        var newPath5= '';
        if(flag5<len){
            switch (files.user_icon5.type) {
                case 'image/jpeg':
                    extName5 = 'jpeg';
                    break;
                case 'image/jpg':
                    extName5 = 'jpg';
                    break;
                case 'image/png':
                    extName5 = 'png';
                    break;
                case 'image/x-png':
                    extName5 = 'png';
                    break;
            }
            if(extName5.length == 0){//没有上传图片
                response.json({"stateCode":'e005'});
                return;
            }
            else {
                form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                avatarName5 = util.createUnique() + '.' + extName5;
                var newPath5 = form.uploadDir + avatarName5;
                var readStream5=fs.createReadStream(files.user_icon5.path);
                var writeStream5=fs.createWriteStream(newPath5);
                readStream5.pipe(writeStream5);
                readStream5.on('end',function(){
                    fs.unlinkSync(files.user_icon5.path);
                });
            }
        }

        //--------------------
        var flag6 = 6;
        var extName6 = '';  //后缀名
        var avatarName6 = '';//上传的文件名
        var newPath6= '';
        if(flag6<len){
            switch (files.user_icon6.type) {
                case 'image/jpeg':
                    extName6 = 'jpeg';
                    break;
                case 'image/jpg':
                    extName6 = 'jpg';
                    break;
                case 'image/png':
                    extName6 = 'png';
                    break;
                case 'image/x-png':
                    extName6 = 'png';
                    break;
            }
            if(extName6.length == 0){//没有上传图片
                response.json({"stateCode":'e005'});
                return;
            }
            else {
                form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小
                avatarName6 = util.createUnique() + '.' + extName6;
                newPath6 = form.uploadDir + avatarName6;
                var readStream6=fs.createReadStream(files.user_icon6.path);
                var writeStream6=fs.createWriteStream(newPath6);
                readStream6.pipe(writeStream6);
                readStream6.on('end',function(){
                    fs.unlinkSync(files.user_icon6.path);
                });
            }
        }


        personaldao.upIcon(fields.caixi,fields.telephone,fields.author,avatarName0,fields.biaoti,fields.gushi,avatarName1,fields.buzoua,avatarName2,fields.buzoub,avatarName3,fields.buzouc,avatarName4,fields.buzoud,avatarName5,fields.buzoue,avatarName6,fields.buzouf,function (result) {
            if(result.affectedRows==0){
                fs.unlinkSync(newPath0);
                fs.unlinkSync(newPath1);
                fs.unlinkSync(newPath2);
                fs.unlinkSync(newPath3);
                fs.unlinkSync(newPath4);
                fs.unlinkSync(newPath5);
                fs.unlinkSync(newPath6);
                response.json({"stateCode":0});
            }
            if(result=='e004'){
                fs.unlinkSync(newPath0);
                fs.unlinkSync(newPath1);
                fs.unlinkSync(newPath2);
                fs.unlinkSync(newPath3);
                fs.unlinkSync(newPath4);
                fs.unlinkSync(newPath5);
                fs.unlinkSync(newPath6);
                response.json({"stateCode":'e004'});
            }
            if (result.affectedRows == 1) {
                response.json({"stateCode":1});
            }
        })
    })
})
module.exports = router;

