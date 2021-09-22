let express = require('express');
let router = express.Router();
let {
    cart,
    // results,
    create,
    show,
    update,
    edit,
    index,
    store,
    destroy
} = require('../controllers/productsController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');
let {
    creationValidations,
    editValidations
} = require('../middlewares/productValidations');

// vista carrito
router.get(
    '/cart',
    userMiddleware,
    cart
);

// resultados de búsqueda
// YET TO IMPLEMENT
// router.get(
//     '/results',
//     results
// );

// vista creación de producto <form>
router.get(
    '/create',
    adminMiddleware,
    create
);

// vista detalle de producto
router.get(
    '/detail/:id',
    show
);

// procesar edición de producto
router.put(
    '/detail/:id',
    upload.single('img'),
    editValidations,
    update
);

// vista de edición de producto. <form> de creación con datos
router.get(
    '/edit/:id',
    adminMiddleware,
    edit
);

// vista todos los productos
router.get(
    '/:id?',
    index
);

// procesar creación de producto
router.post(
    '/',
    upload.single('img'),
    creationValidations,
    store
);

// eliminar producto
router.delete(
    '/:id',
    destroy
);

module.exports = router;