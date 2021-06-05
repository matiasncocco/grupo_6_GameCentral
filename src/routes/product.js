let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

router.get('/index', productController.index); // 1 INDEX: show all items
router.get('/create', productController.create); // 2 CREATE: show product <form>
router.get('/:id', productController.show); // 3 SHOW: show product detail
router.post('/', productController.store); // 4 STORE: store product <form> fields

// 5. /products/:id/edit (GET)
// Formulario de edición de productos

// 6. /products/:id (PUT)
// Acción de edición (a donde se envía el formulario):

// 7. /products/:id (DELETE)

module.exports = router;