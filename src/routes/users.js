let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let guestMiddleware = require('../middlewares/guestMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');
let {
    registerValidations,
    // loginValidations
} = require('../middlewares/userValidations');

// // // // // // // // //
// USAR                 //
// email: admin         //
// password: admin      //
// // // // // // // // //

// vista registro de usuario <form>
router.get(
    '/register',
    guestMiddleware,
    usersController.register
);

// procesar registro/creación de usuario
router.post(
    '/',
    upload.single('avatar'),
    registerValidations,
    usersController.processRegister
);

// vista login de usuario <form>
router.get(
    '/login',
    guestMiddleware,
    usersController.login
);

// procesar login de usuario
router.post(
    '/login',
    // loginValidations,
    usersController.processLogin
);

// vista de perfil del usuario
router.get(
    '/profile',
    userMiddleware,
    usersController.show
);

// procesar delog de usuario & destrucción de cookie
router.get(
    '/delog',
    usersController.delog
);

// vista con lista de todos los usuarios
router.get(
    '/',
    adminMiddleware,
    usersController.index
);

// procesar edición de usuario
router.put(
    '/profile',
    upload.any('avatar'),
    usersController.update
);

// elimiar usuario
router.delete(
    '/profile',
    usersController.destroy
);

// vista para cambiar, pregunto: user.admin === ( 1 || 0 )
router.get(
    '/:id',
    adminMiddleware,
    usersController.admin
);

// procesar cambio de, submit: user.admin === ( 1 || 0 )
router.put(
    '/:id',
    usersController.giveAdmin
);

module.exports = router;