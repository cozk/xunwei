
var pool=require('./db_pool').pool;
var forumSql=require('./forumSql').sql;
exports.forumDao={
    getAllPost:function(callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.getAllPost,function (error,result) {
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
    getAllCai:function(callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.getAllCai,function (error,result) {
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
    addat:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.addat,[pinglun[0].atedtelephone,pinglun[1].attelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    addhf:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.addhf,[pinglun[0].huifucontent,pinglun[1].huifuauthor,pinglun[2].huifued,pinglun[3].hfplid],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    gethf:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.gethf,[pinglun[0].hfplid],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    deleteat:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.deleteat,[pinglun[0].atedtelephone,pinglun[1].attelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    addguanzhu:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.addguanzhu,[pinglun[1].attelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    deleteguanzhu:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.deleteguanzhu,[pinglun[1].attelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    addfensi:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.addfensi,[pinglun[0].atedtelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    deletefensi:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.deletefensi,[pinglun[0].atedtelephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    addliulan:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.addliulan,[pinglun[0].title],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    addcailiulan:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.addcailiulan,[pinglun[0].title],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    searchgz:function(pinglun,callback){
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(forumSql.searchgz,[pinglun[0].atedtelephone,pinglun[1].attelephone],function (error,result) {
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

}