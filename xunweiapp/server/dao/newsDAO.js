
var pool=require('./db_pool').pool;
var newsSql=require('./newsSql').sql;
exports.newsDao={
    getAllNews:function(callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(newsSql.getAllNews,function (error,result) {
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