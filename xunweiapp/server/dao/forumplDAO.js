
var pool=require('./db_pool').pool;
var forumplSql=require('./forumplSql').sql;
exports.forumplDao={
    getAllPinglun:function(callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumplSql.getAllPinglun,function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                //console.log(result);
                callback(result);
                client.release();
            })
        })
    }
}