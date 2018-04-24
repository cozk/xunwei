var pool=require('./db_pool').pool;
var healthSql=require('./healthSql').sql;
exports.healthDao={
    getAllHealth:function(callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(healthSql.gethealth,function (error,result) {
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