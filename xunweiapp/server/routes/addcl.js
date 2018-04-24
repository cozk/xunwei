
var express = require('express');
var router = express.Router();
var addclDao=require('./../dao/addclDAO').addclDao;
router.post('/add', function(req, res, next) {
    var user = req.body;
    console.log(user);
    if(user){
        addclDao.addcl(user,function (result) {
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }

});

router.post('/searchcl', function(req, res, next) {
    var user = req.body;
    console.log(user);
    console.log(99);
    if(user){
        addclDao.searchcl(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }

});

router.post('/deletecl', function(req, res, next) {
    var user = req.body;
    if(user){
        addclDao.deletecl(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});

router.post('/addrenqi', function(req, res, next) {
    var user = req.body;
    if(user){
        addclDao.addrenqi(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});

router.post('/deleterenqi', function(req, res, next) {
    var user = req.body;
    if(user){
        addclDao.deleterenqi(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});

router.get('/getcl', function(req, res, next) {
    addclDao.getAllCookbook(req,function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});

router.post('/getallcl', function(req, res, next) {
    var user = req.body;
    if(user){
        addclDao.getallcl(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/getallgz', function(req, res, next) {
    var user = req.body;
    if(user){
        addclDao.getallgz(user,function (result) {
            console.log(result);
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
router.post('/getallfs', function(req, res, next) {
    var user = req.body;
    if(user){
        addclDao.getallfs(user,function (result) {
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