var pool=require('./db_pool').pool;
var personalSql=require('./personalSql').sql;
exports.personalDao= {
    // getPersonal:function (callback) {
    //     pool.getConnection(function (error,client) {
    //         if(error){
    //             return;
    //         }
    //         client.query(personalSql.getPersonal,function (error,result) {
    //             if(error){
    //                 callback('e004');
    //                 return;
    //             }
    //             callback(result);
    //             client.release();
    //         })
    //     })
    // }
    getWork: function (telephone, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(personalSql.getWork, [telephone], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    getComm: function (pinglunid, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(personalSql.getComm, [pinglunid], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    upIcon: function (caixi, telephone, author, cookimg, biaoti, gushi, cookbookimga, buzoua, cookbookimgb, buzoub, cookbookimgc, buzouc, cookbookimgd, buzoud, cookbookimge, buzoue, cookbookimgf, buzouf, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return;
            }
            client.query(personalSql.upIcon, [caixi,cookimg,biaoti,buzoua,buzoub,buzouc,buzoud,buzoue,buzouf, cookbookimga,cookbookimgb,cookbookimgc,cookbookimgd,cookbookimge,cookbookimgf,telephone,author,gushi], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    }
}


