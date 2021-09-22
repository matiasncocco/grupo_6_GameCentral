let express = require('express');
let router = express.Router();
let {
    register,
    processRegister,
    login,
    processLogin,
    show,
    delog,
    index,
    update,
    destroy,
    // admin,
    // giveAdmin
} = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let guestMiddleware = require('../middlewares/guestMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');
let {
    registerValidations,
    loginValidations
} = require('../middlewares/userValidations');

// vista registro de usuario <form>
router.get(
    '/register',
    guestMiddleware,
    register
);

// procesar registro/creación de usuario
router.post(
    '/',
    upload.single('avatar'),
    registerValidations,
    processRegister
);

// vista login de usuario <form>
router.get(
    '/login',
    guestMiddleware,
    login
);

// procesar login de usuario
router.post(
    '/login',
    loginValidations,
    processLogin
);

// vista de perfil del usuario
router.get(
    '/profile',
    userMiddleware,
    show
);

// procesar delog de usuario & destrucción de cookie
router.get(
    '/delog',
    delog
);

// vista con lista de todos los usuarios
router.get(
    '/',
    adminMiddleware,
    index
);

// procesar edición de usuario
router.put(
    '/profile',
    upload.any('avatar'),
    update
);

// elimiar usuario
router.delete(
    '/profile',
    destroy
);

// vista para cambiar, pregunto: user.admin === ( 1 || 0 )
// YET TO IMPLEMENT
// router.get(
//     '/:id',
//     adminMiddleware,
//     admin
// );

// procesar cambio de, submit: user.admin === ( 1 || 0 )
// YET TO IMPLEMENT
// router.put(
//     '/:id',
//     giveAdmin
// );

module.exports = router;