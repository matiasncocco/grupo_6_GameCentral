const express = require('express')
const router = express.Router();
let productController = require('../controllers/productController')

router.get('/:idProduct', productController.renderProduct)

module.exports = router