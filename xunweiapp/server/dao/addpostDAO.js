
var pool=require('./db_pool').pool;
var addpostSql=require('./addpostSql').sql;
exports.addpostDao={
    addpost:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addpostSql.addpost,[pinglun[0].content,pinglun[1].id,pinglun[2].title],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                console.log(result);
                callback(result.affectedRows);
                client.release();
            })
        })
    }

}