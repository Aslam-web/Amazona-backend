const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name :     {type : String, required : true},
  email :    {type : String, required : true},
  password : {type : String, required : true},
  role :     {type : String, required : true, enum : ["Admin", "Manager", "User"], default : "User"}

}, { collection: 'User', timestamps : true})

const User = mongoose.model('User', userSchema);
module.exports = User;