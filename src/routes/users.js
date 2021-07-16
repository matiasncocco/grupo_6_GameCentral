let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let guestMiddleware = require('../middlewares/guestMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');
let { check } = require('express-validator');

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
// -> GUESTS
router.get('/register', guestMiddleware, validations, usersController.register);

// procesar registro/creación de usuario
// (inaccesible)
router.post('/', upload.single('avatar'), validations, usersController.processRegister);

// vista login de usuario <form>
// -> GUESTS
router.get('/login', guestMiddleware, usersController.login);

// procesar login de usuario
// (inaccesible)
router.post('/login', usersController.processLogin);

// vista de perfil del usuario
// -> USUARIOS
router.get('/profile', userMiddleware, usersController.show);

// procesar delog de usuario & destrucción de cookie
// (inaccesible)
router.get('/delog', usersController.delog);

// vista con lista de todos los usuarios
// -> ADMINS
// adminMiddleware
router.get('/', usersController.index);

// vista para cambiar user.admin === ( true || false )
// -> ADMINS
router.get('/:id', adminMiddleware, usersController.admin)

// procesar cambio de user.admin === ( true || false )
// (inaccesible)
router.put('/:id', usersController.giveAdmin);

// /users/:id/edit (GET)
// Formulario de edición de usuarios

// /users/:id (PUT)
// Acción de edición (a donde se envía el formulario):

// /users/:id (DELETE)
// Eliminar usuario de la DB

module.exports = router;