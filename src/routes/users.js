let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let guestMiddleware = require('../middlewares/guestMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');
let { check } = require('express-validator');

// // // // // // // // //
// USAR                 //
// email: admin         //
// password: admin      //
// // // // // // // // //

let validations = [
    check('name')
        .notEmpty().withMessage('Completa este campo').bail()
        .isLength( { min: 2, max: 20 } ).withMessage('Debe ser entre 2 y 20 caracteres').bail()
        .isAlpha([ 'es-ES' ]).withMessage('Debe ser solo letras').bail(),
    check('surname')
        .notEmpty().withMessage('Completa este campo').bail()
        .isLength( { min: 2, max: 20 } ).withMessage('Debe ser entre 2 y 20 caracteres').bail()
        .isAlpha([ 'es-ES' ]).withMessage('Debe ser solo letras').bail(),
    check('email')
        .notEmpty().withMessage('Completa este campo').bail()
        .isEmail().withMessage('Debe ser una dirección de e-mail válida').bail(),
    check('password')
        .notEmpty().withMessage('Completa este campo').bail()
        .isLength( { min: 4, max: 12 } ).withMessage('Debe ser entre 4 y 12 caracteres').bail(),
    check('passwordCheck')
        .notEmpty().withMessage('Completa este campo').bail()
        .custom((match, { req } ) => {
            let password = req.body.password;
            if (password != match) {
                throw new Error('Las contraseñas no coinciden');
            };
        }).bail(),
    check('avatar')
        .notEmpty().withMessage('Completa este campo').bail(),
];

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
    // validations,
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