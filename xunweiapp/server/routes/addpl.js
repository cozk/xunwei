
var express = require('express');
var router = express.Router();
var addplDao=require('./../dao/addplDAO').addplDao;
router.post('/add', function(req, res, next) {
    var user = req.body;
    console.log(user);
    if(user){
        addplDao.addpl(user,function (result) {
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }

});
module.exports = router;