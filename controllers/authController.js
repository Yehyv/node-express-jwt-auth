const User = require('../models/User');


//handling errors
const handleErrors = (err)=>{
    console.log(err.message,err.code);
    let errors = {email: '' , password: '' };

    //handling unique email error
    if(err.code === 11000){
        errors.email = 'that email is already registerd';
        return errors;
    }
    //handling other validation
    else{
        return err.message;
    }
}


module.exports.signup_get= (req,res)=>{
    res.render('signup');
}


module.exports.signup_post= async(req,res)=>{
    const{email,password} = req.body;
    try {
        const user = await User.create({email,password});
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(handleErrors(error));
    }
}


module.exports.login_get= (req,res)=>{
    res.render('login');
}


module.exports.login_post= async(req,res)=>{
    res.send('new login')
}

