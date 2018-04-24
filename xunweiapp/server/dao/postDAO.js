
var pool=require('./db_pool').pool;
var postSql=require('./postSql').sql;
exports.postDao={
    getAllPost:function(callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(postSql.getAllPost,function (error,result) {
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
    deletePost:function (postTitle,callback) {
        console.log(postTitle.title);
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(postSql.deletePost,[postTitle.title],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows){
                    //删除成功
                    callback('1');
                }else{
                    //删除失败
                    callback('2');
                }
                client.release();
            })
        })
    }
}