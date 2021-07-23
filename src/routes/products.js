let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');

// vista carrito
// -> USUARIOS
// !! hay que pasarle userMiddleware !!
router.get('/cart', productsController.cart);

// vista todos los productos
// -> TODOS
router.get('/', productsController.index);

// vista creación de producto <form>
// -> ADMINS
// !! hay que pasarle adminMiddleware !!
router.get('/create', productsController.create);

// vista detalle de producto
// TODOS
router.get('/:id', productsController.show);

// procesar creación de producto
// (inaccesible)
router.post('/', upload.single('img'), productsController.store);

// vista de edición de producto. <form> de creación con datos
// -> ADMINS
// !! hay que pasarle adminMiddleware !!
router.get('/:id/edit', productsController.edit);

// procesar edición de producto
// (inaccesible)
router.post('/:id', upload.single('img'), productsController.update)

// eliminar producto
// (inaccesible)
router.delete('/:id', productsController.destroy);

module.exports = router;