
exports.sql={
    getPasswordById:'select * from user where telephone=?',
    addUser:'insert into user(telephone,password,name,usertime,icon) values(?,?,?,now(),?)',
    getUsertime:'select usertime from user where telephone=?',
    //UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
    editUser:'update user set name=?,sex=? where telephone=?',
    editCookBook:'update cookbook set author=? where telephone=?',
    editPinglun:'update pinglun set pinglunid=? where pltelephone=?',
    editUserpassword:'update user set password=? where telephone=?',
    getUserIcon:'select icon from user where telephone = ? ',
    addUserIcon:'update user set icon = ? where telephone = ?'
};