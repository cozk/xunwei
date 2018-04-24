var express = require('express');
var router = express.Router();
var healthDao=require('./../dao/healthDAO').healthDao;
router.get('/', function(req, res, next) {
    healthDao.getAllHealth(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
module.exports = router;