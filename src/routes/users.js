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
// !! hay que pasarle guestMiddleware !!
router.get('/register', usersController.register);

// procesar registro/creación de usuario
// (inaccesible)
// !! hay que pasarle las validations !!
router.post('/', upload.single('avatar'), usersController.processRegister);

// vista login de usuario <form>
// -> GUESTS
// !! hay que pasarle guestMiddleware !!
router.get('/login', usersController.login);

// procesar login de usuario
// (inaccesible)
router.post('/login', usersController.processLogin);

// vista de perfil del usuario
// -> USUARIOS
// !! hay que pasarle userMiddleware !!
router.get('/profile', usersController.show);

// procesar delog de usuario & destrucción de cookie
// (inaccesible)
router.get('/delog', usersController.delog);

// vista con lista de todos los usuarios
// -> ADMINS
// !! hay que pasarle adminMiddleware !!
router.get('/', usersController.index);

// vista para cambiar user.admin === ( true || false )
// -> ADMINS
// !! hay que pasarle adminMiddleware !!
router.get('/:id', usersController.admin)

// procesar cambio de user.admin === ( true || false )
// (inaccesible)
router.put('/:id', usersController.giveAdmin);

// /users/profile/edit (GET)
// Formulario de edición de usuarios

// /users/profile (PUT)
// Acción de edición (a donde se envía el formulario):

// /users (DELETE)
// Eliminar usuario de la DB

module.exports = router;