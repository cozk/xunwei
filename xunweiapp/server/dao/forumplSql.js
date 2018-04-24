
exports.sql={
    getAllPinglun:'select * from pinglun left join user on pinglun.pinglunid= user.name ORDER BY plid'
};