var jwt=require('jwt-simple');
var util=require('../utils/util');
var moment = require('moment');
exports.checkToken=function ck(req,res,next) {
    var token = req.header('token') || req.query.token || req.body.token;
    try {
        var decoded = jwt.decode(token, util.secret);
        if (decoded.exp >= moment().valueOf()) {
            next();
        } else {
            res.json({stateCode: 2});
        }
    } catch (e) {
        res.json({stateCode: 2});
    }
}
