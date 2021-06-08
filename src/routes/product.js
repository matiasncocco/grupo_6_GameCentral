let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');
let upload = require('../middlewares/multerMiddleware');

fields = [
    {
        name: 'img',
        maxCount: 1
    },
    {
        name: 'card',
        maxCount: 1
    }
];

router.get('/cart', productController.cart);
router.get('/', productController.index); // 1 show all items
router.get('/create', productController.create); // 2 show product <form>
router.get('/:id', productController.show); // 3 show product detail
router.put('/:id', upload.fields(fields), productController.update) // 6 submit changes to existing product
router.delete('/:id', productController.destroy); // 7 remove entry
router.post('/', upload.fields(fields), productController.store); // 4 store product <form> fields
router.get('/:id/edit', productController.edit); // 5 show <form> with current product data

module.exports = router;