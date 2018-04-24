var pool=require('./db_pool').pool;
var userSql=require('./userSql').sql;
var util=require('./../utils/util');
var aliyun=require('./../utils/aliyun');
exports.userDao={
    getPasswordById:function (telephone,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return;
            }
            client.query(userSql.getPasswordById,[telephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    sendSms:function (telephone,callback) {
        this.getPasswordById(telephone,function (result) {
            if (result.length==0){
                var code=util.createSms();
                if(telephone){
                    aliyun.sendMessage(telephone,'SMS_99380029',"{\"code\":\"" + code + "\"}",function (data) {
                    });
                }
                console.log(code);
                callback(code);
            }
            else {
                callback('2');   //用户已存在
            }
        })
    },
    addUser:function (user,callback) {
        this.getPasswordById(user.telephone,function (result) {
            if(result.length==0){
                pool.getConnection(function (error,client) {
                    if(error){
                        return;
                    }
                    client.query(userSql.addUser,[user[0].telephone,util.MD5(user[0].password),user[0].nickname,user[1].icon],function (error,result) {
                        if(error){
                            callback('e004');
                            return;
                        }
                        if(result.affectedRows==1){
                            client.query(userSql.getUsertime,[user[0].telephone],function (error,result) {
                                if(error){
                                    callback('e004');
                                    return;
                                }
                                callback(result);
                            })
                        }
                        if(result.affectedRows==0){
                            callback('0');
                        }
                        // callback(result.affectedRows);
                        client.release();
                    })
                })
            }else {
                callback('5');
            }
        })
    },
    editUser:function (user,callback) {
        var _nickname = user[0].nickname;
        var _telephone = user[1].telephone;
        this.getPasswordById(user[1].telephone,function (result) {
            if(result.length==0) {
                callback('3');//，没有对应的id
            }
            else{
                if (user[0].nickname != result[0].name) {
                    pool.getConnection(function (error, client) {
                        if (error) {
                            return;
                        }
                        client.query(userSql.editUser, [user[0].nickname,user[2].sex,user[1].telephone], function (error, result) {
                            if (error) {
                                callback('e004');
                                return;
                            }
                           if(result.affectedRows == 1) {
                               client.query(userSql.editCookBook, [_nickname, _telephone], function (error, result) {
                                   if (error) {
                                       return;
                                   }
                               })
                               client.query(userSql.editPinglun, [_nickname, _telephone], function (error, result){
                                   if(error){
                                       return;
                                   }
                               })

                               callback('1');
                           }
                           if(result.affectedRows == 0){
                               callback(2);
                           }
                        })
                        client.release();
                    })
                }
                else
                {
                    callback('2')//昵称跟原来一样
                }
            }

        })
    },
    editUserpass:function (user,callback) {
        console.log(user);
        this.getPasswordById(user[1].telephone,function (result) {
                if(result.length==0) {
                    callback('3');//，没有对应的id
                }
                else{
                    if (user[0]!= result[0].password) {
                        pool.getConnection(function (error, client) {
                            if (error) {
                                return;
                            }
                            client.query(userSql.editUserpassword, [util.MD5(user[0]),user[1].telephone], function (error, result) {
                                if (error) {
                                    callback('e004');
                                    return;
                                }
                                callback(result.affectedRows);
                                client.release();

                            })
                        })
                    }
                    else
                    {
                        callback('2')//密码跟原来一样
                    }
                }

        })
    },
    getUserIcon:function (telephone,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(userSql.getUserIcon,[telephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    addUserIcon:function (telephone,iconName,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                callback('e004');
                return;
            }
            client.query(userSql.addUserIcon,[iconName,telephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                if(result.affectedRows == 1) {
                    client.query(userSql.getUserIcon,[telephone],function (error,result) {
                        if(error){
                            callback('e004');
                            return;
                        }
                        callback(result);
                    })
                }
                else{
                    callback('0');
                }
                client.release();
            })
        })
    }
}