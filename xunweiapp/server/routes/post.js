
var express = require('express');
var router = express.Router();
var postDao=require('./../dao/postDAO').postDao;
router.get('/', function(req, res, next) {
    postDao.getAllPost(function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
})
router.post('/delpost', function (req, res, next) {
    var posttitle = req.body;
    console.log(posttitle);
    if (posttitle) {
        postDao.deletePost(posttitle, function (result) {
            if (result == '1') {
                res.json({"stageCode": "1"});
            }
            else if (result == '2') {
                res.json({"stageCode": "2"});
            }
            else {
                res.json({"stageCode": "e004"});
            }
        })
    }
})
module.exports = router;