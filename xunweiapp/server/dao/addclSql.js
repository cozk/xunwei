
exports.sql={
    addcl:'insert into collections(clcookid,cltelephone) values(?,?)',
    getcl:'select * from collections where cltelephone = ? ',
    searchcl:'select clid from collections where clcookid = ? and cltelephone = ?',
    deletecl:'delete from collections where clcookid = ? and cltelephone = ?',
    addrenqi:'update ckbook set ckrenqi=ckrenqi+1 where ckid=?',
    deleterenqi:'update ckbook set ckrenqi=ckrenqi-1 where ckid=?',
    getallcl:'select ckauthor,ckname,cktime from collections left join ckbook on collections.clcookid=ckbook.ckid where cltelephone = ? order by clid desc',
    getallgz:'select attelephone,name,guanzhu,fensi,usertime from attention left join user on attention.atedtelephone=user.telephone where attelephone = ?',
    getallfs:'select atedtelephone,name,guanzhu,fensi,usertime from attention left join user on attention.attelephone=user.telephone where atedtelephone = ?'
};