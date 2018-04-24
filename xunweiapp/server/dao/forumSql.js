
exports.sql={
    getAllPost:'select * from post left join user on post.userid=user.name',
    getAllCai:'select * from usercookbook left join user on usercookbook.telephone=user.telephone',
    getAllPinglun:'select * from pinglun left join user on pinglun.pinglunid= user.name',
    addat:'insert into attention(atedtelephone,attelephone) values(?,?)',
    deleteat:'delete from attention where atedtelephone = ? and attelephone = ?',
    addguanzhu:'update user set guanzhu=guanzhu+1 where telephone=?',
    deleteguanzhu:'update user set guanzhu=guanzhu-1 where telephone=?',
    searchgz:'select atid from attention where atedtelephone = ? and attelephone = ?',
    addfensi:'update user set fensi=fensi+1 where telephone=?',
    deletefensi:'update user set fensi=fensi-1 where telephone=?',
    addliulan:'update post set liulan=liulan+1 where title=?',
    addcailiulan:'update usercookbook set renqi=renqi+1 where biaoti=?',
    addhf:'insert into huifu(huifucontent,huifuauthor,huifued,hfplid) values(?,?,?,?)',
    gethf:'select * from pinglun left join huifu on pinglun.plid =huifu.hfplid where hfplid = ?'
};