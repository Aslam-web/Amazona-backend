const data = require('../data');
const Product = require('../models/productModels')

const productController = {

  createProduct(req , res) {
   
  },

  async seedProducts(req, res){
    // console.log(data.products);
    const createdProducts = await Product.insertMany(data.products);
    res.send(createdProducts);
  },

  async getProducts(req , res) {
    let allProducts = await Product.find();
    return res.status(200).json(allProducts);
  },

  async getProduct(req , res) {
    const product = await Product.findOne({_id:req.params.id})
    console.log(product)
    res.send(product);
  }
}



module.exports = productController;