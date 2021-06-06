let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');
let upload = require('../middlewares/multerMiddleware');

router.get('/', productController.index); // 1 INDEX: show all items
router.get('/create', productController.create); // 2 CREATE: show product <form>
router.get('/:id', productController.show); // 3 SHOW: show product detail
router.put('/:id', productController.update) // 6 UPDATE: submit changes to existing product
router.delete('/:id', productController.destroy); // 7 DESTROY: remove entry
router.post('/', upload.single('card'), productController.store); // 4 STORE: store product <form> fields
router.get('/:id/edit', productController.edit); // 5 EDIT: show <form> with current product data

module.exports = router;