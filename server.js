const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoutes = require('./routers/userRouter')
const productRoutes = require('./routers/productRouter')

const express = require('express')
const app = express();
const connectDB = require("./config/db")
const cors = require('cors')

connectDB();
app.use(cors());
app.use(express.json());            // express().use(express.json)

dotenv.config();

// app.get('/api/products', (req, res) => {
  // console.log(data);
//   res.send(data.products);
// })

// app.get('/api/products/:id', (req, res) => {
//   console.log(req.params.id );
  // const product = data.products.find(p => p._id == req.params.id )
  
//   const product = data.products.find(p => p._id == req.params.id)
//   console.log(product);
//   res.send(product);
// })

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);







// const port = ;
app.listen(process.env.PORT, () => {
  console.log(`Running at port http://localhost:${process.env.PORT}`)
})