
var express = require('express');
var router = express.Router();
var forumDao=require('./../dao/forumDAO').forumDao;
router.get('/all', function(req, res, next) {
    forumDao.getAllPost(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
router.get('/allcai', function(req, res, next) {
    forumDao.getAllCai(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
router.post('/addat', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.addat(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/addhf', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.addhf(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/gethf', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.gethf(user,function (result) {
            console.log(result);
                res.json(result);
        })
    }
});
router.post('/deleteat', function(req, res, next) {
    var user = req.body;
    console.log(user);
    console.log('abcv');
    if(user){
        forumDao.deleteat(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/addguanzhu', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.addguanzhu(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/deleteguanzhu', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.deleteguanzhu(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/addfensi', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.addfensi(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/deletefensi', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.deletefensi(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/addliulan', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.addliulan(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/addcailiulan', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.addcailiulan(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/searchgz', function(req, res, next) {
    var user = req.body;
    if(user){
        forumDao.searchgz(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
module.exports = router;