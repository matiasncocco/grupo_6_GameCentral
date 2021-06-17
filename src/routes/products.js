let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController');
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

router.get('/cart', productsController.cart);
router.get('/', productsController.index); // 1 show all items
router.get('/create', productsController.create); // 2 show product <form>
router.post('/', upload.fields(fields), productsController.store); // 4 store product <form> fields
router.get('/:id/edit', productsController.edit); // 5 show <form> with current product data
router.get('/:id', productsController.show); // 3 show product detail
router.put('/:id', upload.fields(fields), productsController.update) // 6 submit changes to existing product
router.delete('/:id', productsController.destroy); // 7 remove entry

module.exports = router;