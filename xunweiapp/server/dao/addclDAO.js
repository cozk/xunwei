
var pool=require('./db_pool').pool;
var addclSql=require('./addclSql').sql;
exports.addclDao={
    addcl:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.addcl,[pinglun[0].ckid,pinglun[1].cltelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    searchcl:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.searchcl,[pinglun[0].ckid,pinglun[1].cltelephone],function (error,result) {
                var result2 =JSON.stringify(result);
                if(error){
                    callback('e004');
                    return;
                }
                if(result)
                   callback(result2);
                else
                   callback(0) ;
                client.release();
            })
        })
    },

    deletecl:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.deletecl,[pinglun[0].ckid,pinglun[1].cltelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    addrenqi:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.addrenqi,[pinglun[0].ckid],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    deleterenqi:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.deleterenqi,[pinglun[0].ckid],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    getcl:function (cltel,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.getcl,[cltel],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                //console.log(result);
                callback(result);
                client.release();
            })
        })
    },

    getallcl:function (cltel,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.getallcl,[cltel[0].cltelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    getallgz:function (cltel,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.getallgz,[cltel[0].cltelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    getallfs:function (cltel,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addclSql.getallfs,[cltel[0].cltelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    }

}