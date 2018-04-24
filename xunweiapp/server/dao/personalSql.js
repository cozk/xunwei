
exports.sql={
    getPersonal:'select * from user',
    getWork:'select * from user left join usercookbook on user.telephone = usercookbook.telephone where user.telephone = ? order by cooktime desc',
    getComm:'select * from pinglun where pinglunid = ? order by pingluntime desc',
    upIcon:'insert into usercookbook (cookname,cookimg,biaoti,buzoua,buzoub,buzouc,buzoud,buzoue,buzouf,cookbookimga,cookbookimgb,cookbookimgc,cookbookimgd,cookbookimge,cookbookimgf,telephone,author,gushi,cooktime,renqi,pinglun) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now(),0,0)',
};