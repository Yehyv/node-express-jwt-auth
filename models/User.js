const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {isEmail} = require('validator');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true,'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email' ]
    },
    password: {
        type: String,
        required: [true, 'please enter password'],
        minLength: [5,'password too short']
    }
},{timestamps:true});

//firing a function after doc saved to DB
userSchema.post('save',function(doc,next){
    console.log('new user has been created', doc);
    next();
});

//firing a function before doc saved to DB
userSchema.pre('save', async function(next){
    console.log('user about to be created and saved in DB', this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    console.log('password has been successfully hashed');
    next();
});


const User =    mongoose.model('User',userSchema);

module.exports = User;