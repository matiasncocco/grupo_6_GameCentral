let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');
let {
    creationValidations,
    editValidations
} = require('../middlewares/productValidations');

// // // // // // // // //
// USAR                 //
// email: admin         //
// password: admin      //
// // // // // // // // //

// vista carrito
router.get(
    '/cart',
    userMiddleware,
    productsController.cart
);

// vista todos los productos
router.get(
    '/:id?',
    productsController.index
);

// resultados de búsqueda
router.get(
    '/results',
    productsController.results
);

// vista creación de producto <form>
router.get(
    '/create',
    adminMiddleware,
    productsController.create
);

// vista detalle de producto
router.get(
    '/:id',
    productsController.show
);

// procesar creación de producto
router.post(
    '/',
    upload.single('img'),
    creationValidations,
    productsController.store
);

// vista de edición de producto. <form> de creación con datos
router.get(
    '/:id/edit',
    adminMiddleware,
    productsController.edit
);

// procesar edición de producto
router.put(
    '/:id',
    upload.single('img'),
    editValidations,
    productsController.update
);

// eliminar producto
router.delete(
    '/:id',
    productsController.destroy
);

module.exports = router;