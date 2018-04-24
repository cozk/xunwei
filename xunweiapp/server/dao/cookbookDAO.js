var pool = require('./db_pool').pool;
var cookbookSql = require('./cookbookSql').sql;
exports.cookbookDao = {
    getAllCookBook: function (callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(cookbookSql.getcookbook, function (error, result) {
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
    deleteCookbook: function (menuId, callback) {
        console.log("123");
        console.log(menuId.ckid);
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(cookbookSql.deleteCookbook, [menuId.ckid], function (error, result) {
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