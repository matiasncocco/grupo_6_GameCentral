let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');
let upload = require('../middlewares/multerMiddleware');

// let fields = [
//     {
//         name: 'img'

//     },
//     {
//         name: 'capsule'
//     },
//     {
//         name: 'card'
//     }
// ];

router.get('/index', productController.index); // 1 INDEX: show all items
router.get('/create', productController.create); // 2 CREATE: show product <form>
router.get('/:id', productController.show); // 3 SHOW: show product detail
router.post('/', upload.array('img',3), productController.store); // 4 STORE: store product <form> fields

// 5 EDIT: show <form> with current product data
// /products/:id/edit (GET)

// 6 UPDATE: submit changes to existing product
// /products/:id (PUT)

// 7 DESTROY: remove entry
// /products/:id (DELETE)

module.exports = router;