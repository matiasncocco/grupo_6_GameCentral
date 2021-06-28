let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');
let userMiddleware = require('../middlewares/userMiddleware');
let guestMiddleware = require('../middlewares/guestMiddleware');
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
// router.get('/:id', userMiddleware, usersController.show);

// NOT IMPLEMENTED
// vista con lista de todos los usuarios
// solo pueden entrar
// -> ADMINS
// router.get('/', usersController.index);

// /users/:id/edit (GET)
// Formulario de edición de usuarios

// /users/:id (PUT)
// Acción de edición (a donde se envía el formulario):

// /users/:id (DELETE)
// Eliminar usuario de la DB

module.exports = router;