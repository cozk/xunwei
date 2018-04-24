
var express = require('express');
var router = express.Router();
var cookbookDao = require('./../dao/cookbookDAO').cookbookDao;
router.get('/', function (req, res, next) {
    cookbookDao.getAllCookBook(function (result) {
        if (result.length == 0) {
            res.json(null);
        } else {
            res.json(result);
        }
    })
})
router.post('/delmenu', function (req, res, next) {
    var menuId = req.body;
    console.log(menuId);
    if (menuId) {
        cookbookDao.deleteCookbook(menuId, function (result) {
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
router.post('/delusermenu', function (req, res, next) {
    var menuId = req.body;
    console.log(menuId);
    if (menuId) {
        cookbookDao.deleteCookbookup(menuId, function (result) {
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