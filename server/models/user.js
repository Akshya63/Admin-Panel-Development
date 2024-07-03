const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    FirstName:String,
    LastName:String,
    Email:{
        type:String,
        unique:true
    },
    Password: String

})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;
