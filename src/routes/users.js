let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let guestMiddleware = require('../middlewares/guestMiddleware');
let adminMiddleware = require('../middlewares/adminMiddleware');
let { check } = require('express-validator');

validations = [
    // check.
];

// vista registro de usuario <form>
// solo pueden entrar 
// -> GUESTS
router.get('/register', guestMiddleware, usersController.register);

// procesar registro/creación de usuario
// (inaccesible)
router.post('/', upload.single('avatar'), usersController.processRegister);

// vista login de usuario <form>
// solo pueden entrar 
// -> GUESTS
router.get('/login', guestMiddleware, usersController.login);

// procesar login de usuario
// (inaccesible)
router.post('/login', usersController.processLogin);

// NOT IMPLEMENTED
// vista de perfil del usuario
// solo pueden entrar 
// -> USUARIOS
router.get('/profile/:id', userMiddleware, usersController.show);

// vista con lista de todos los usuarios
// solo pueden entrar
// -> ADMINS
router.get('/', adminMiddleware, usersController.index);

// vista para cambiar user.admin === ( true || false )
// solo pueden entrar
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