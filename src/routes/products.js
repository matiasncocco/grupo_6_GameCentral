let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');

let multerFields = [
    {
        name: 'img',
        maxCount: 1
    },
    {
        name: 'card',
        maxCount: 1
    }
];

// vista carrito
// -> USUARIOS
router.get('/cart', userMiddleware, productsController.cart);

// vista todos los productos
// -> TODOS
router.get('/', productsController.index);

// vista creación de producto <form>
// -> ADMINS
router.get('/create', adminMiddleware, productsController.create);

// vista detalle de producto
// TODOS
router.get('/:id', productsController.show);

// procesar creación de producto
// (inaccesible)
router.post('/', upload.fields(multerFields), productsController.store);

// vista de edición de producto. <form> de creación con datos
// -> ADMINS
router.get('/:id/edit', adminMiddleware, productsController.edit);

// procesar edición de producto
// (inaccesible)
router.put('/:id', upload.fields(multerFields), productsController.update)

// eliminar producto
// (inaccesible)
router.delete('/:id', productsController.destroy);

module.exports = router;