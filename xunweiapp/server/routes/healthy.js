
var express = require('express');
var router = express.Router();
var healthyDao=require('./../dao/healthyDAO').healthyDao;
router.get('/', function(req, res, next) {
    healthyDao.getAllHealthy(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
module.exports = router;