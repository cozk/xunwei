
var express = require('express');
var router = express.Router();
var fs = require('fs');
var addpostDao=require('./../dao/addpostDAO').addpostDao;
router.post('/add', function(requset, response, next) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.parse(request,function (err,fields,files) {
        if(err)
        {
            response.locals.error = err;
            response.json({"stateCode":'e005'});
        }
        var extName = '';
        switch (files.user_icon.type){
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
            form.uploadDir = "../public/uploads/post";
            form.keepExtensions = true;
            form.maxFieldsSize = 2*1024;
            var avatarName = util.createUnique()+'.'+extName;
            var newPath = form.uploadDir + avatarName;
            var readStream = fs.createReadStream(files.user_icon.path);
            var writeStream = fs.createWriteStream(newPath);
            readStream.pipe(writeStream);
            readStream.on('end',function () {
                fs.unlinkSync(files.user_icon.path);
            });
            addpostDao.addpost(fields.title,fields.name,fields.detail,avatarName),function (result) {
                if(result.affectedRows == 0){
                    fs.unlinkSync(newPath);
                    response.json({"stateCode":0});
                }
                if(result.affectedRows == 'e004'){
                    fs.unlinkSync(newPath);
                    response.json({"stateCode":'e004'});
                }
                if(result.affectedRows == 1){
                    response.json({"stateCode":1});
                }
            }
        }
    })


});
module.exports = router;