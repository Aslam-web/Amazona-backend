const mongoose = require('mongoose');
const URI = "mongodb+srv://aslam:aslam@cluster0.oqzgf.mongodb.net/Amazona-React?retryWrites=true&w=majority"

options ={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

const connectDB = () => {
  mongoose.connect(URI, options)
  .then( () => console.log("Database Connected") )
}

module.exports = connectDB;