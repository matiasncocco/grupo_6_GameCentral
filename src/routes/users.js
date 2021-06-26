let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');
let { check } = require('express-validator');

validations = [
    // check.
];

// show login view // <form>
router.get('/login', usersController.login);
// process login
router.post('/login', usersController.processLogin);
// show register view // <form>
router.get('/register', usersController.register);
// process register // store user in DB
router.post('/', upload.single('avatar'), usersController.processRegister);
// show users/:id view
router.get('/:id', usersController.show);
// show user list
router.get('/', usersController.index);

// /users/:id/edit (GET)
// Formulario de edición de usuarios

// /users/:id (PUT)
// Acción de edición (a donde se envía el formulario):

// /users/:id (DELETE)
// Eliminar usuario de la DB

module.exports = router;