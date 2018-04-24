
var pool=require('./db_pool').pool;
var healthySql=require('./healthySql').sql;
exports.healthyDao={
    getAllHealthy:function(callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(healthySql.gethealthy,function (error,result) {
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