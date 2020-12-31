const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/seed', productController.seedProducts);

productRouter.get('/', productController.getProducts);
// productRouter.get('/:id', productController.getProduct);

module.exports = productRouter;