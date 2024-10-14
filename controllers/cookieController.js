module.exports.set_cookie = (req,res)=>{
    res.cookie('newUser',false);
    res.cookie('isEmplyee',true);
    res.send('you got the cookies');
}

