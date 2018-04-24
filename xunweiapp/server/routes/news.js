
var express = require('express');
var router = express.Router();
var newsDao=require('./../dao/newsDAO').newsDao;
router.get('/', function(req, res, next) {
    newsDao.getAllNews(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
module.exports = router;