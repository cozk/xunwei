var pool = require('./db_pool').pool;
var usercookbookSql = require('./usercookbookSql').sql;
exports.usercookbookDao = {
    getAllUserCookBook: function (callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(usercookbookSql.getusercookbook, function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                //console.log(result);
                callback(result);
                client.release();
            })
        })
    },
    deleteUserCookbook: function (menuId, callback) {
        console.log("123");
        console.log(menuId.cookid);
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(usercookbookSql.deleteuserCookbook,[menuId.cookid], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                if (result.affectedRows) {
                    //删除成功
                    callback('1');
                } else {
                    //删除失败
                    callback('2');
                }
                client.release();
            })
        })
    }
}