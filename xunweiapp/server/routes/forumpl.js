
var express = require('express');
var router = express.Router();
var forumplDao=require('./../dao/forumplDAO').forumplDao;
router.get('/', function(req, res, next) {
    forumplDao.getAllPinglun(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
module.exports = router;