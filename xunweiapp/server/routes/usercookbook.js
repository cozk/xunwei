
var express = require('express');
var router = express.Router();
var usercookbookDao = require('./../dao/usercookbookDAO').usercookbookDao;
router.get('/', function (req, res, next) {
    usercookbookDao.getAllUserCookBook(function (result) {
        if (result.length == 0) {
            res.json(null);
        } else {
            res.json(result);
        }
    })
})

router.post('/delusermenu', function (req, res, next) {
    var menuId = req.body;
    console.log(menuId);
    if (menuId) {
        usercookbookDao.deleteUserCookbook(menuId, function (result) {
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