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
        .notEmpty().withMessage('Fill me').bail(),
    check('surname')
        .notEmpty(),
    check('email')
        .notEmpty(),
    check('password')
        .notEmpty(),
    check('passwordCheck')
        .notEmpty(),

];

// vista registro de usuario <form>
// -> GUESTS
router.get('/register', guestMiddleware, usersController.register);

// procesar registro/creación de usuario
// (inaccesible)
router.post('/', upload.single('avatar'), usersController.processRegister);

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
router.get('/', adminMiddleware, usersController.index);

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