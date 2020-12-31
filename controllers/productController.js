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
  }

}


module.exports = productController;