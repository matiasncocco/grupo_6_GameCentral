const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/product/:id', productController.renderProduct)

router.get('/cart', productController.renderCart)

router.get('/new-product', productController.renderNewProduct)

module.exports = router;