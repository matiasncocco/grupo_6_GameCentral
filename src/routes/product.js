const express = require('express')
const router = express.Router();
let productController = require('../controllers/productController')

router.get('/:id', productController.renderProduct)

router.get('/cart', productController.renderCart)

module.exports = router