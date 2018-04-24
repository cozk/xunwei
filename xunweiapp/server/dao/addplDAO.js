
var pool=require('./db_pool').pool;
var addplSql=require('./addplSql').sql;
exports.addplDao={
    addpl:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(addplSql.addpl,[pinglun[0].content,pinglun[1].id,pinglun[2].title],function (error,result) {
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