const data = require('../data');
const User = require('../models/userModels');
const generateToken  = require('../utils');

const userController = {

  async registerUser(req , res) {
    // console.log(req);
    const { name, email, password } = req.body;
    const userName = await User.findOne({name})
    const userEmail = await User.findOne({email})
    // console.log(userName, userEmail);
    if(userName || userEmail) {
        return res.send("User with same name/email Already exists")
    }
    else {
      const newUser = new User({ name, email, password });
      newUser.save();
      // console.log(newUser);
      const token = generateToken(newUser)
      res.send({newUser, token})
    }
  },


  async seedUsers(req, res){
    console.log("seed users")
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
  },
  

  async signinUser(req , res) {
    const email = req.body.email;
    const user = await User.findOne({email});
    
    if(user) {
      if(req.body.password == user.password) {
        const token = generateToken(user);
        return res.send( {user, token} );
      }
    }
    console.log("invalid username or password");
    return  res.status(401).send({ message : "invalid username or password"});
  }

}


module.exports = userController;