let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/login', usersController.login);
router.get('/register', usersController.register);

// 1. /users (GET)
// Listado de usuarios

// 2. /users/create (GET)
// Formulario de creación de usuarios

// 3. /users/:id (GET)
// Detalle de un usuario particular

// 4. /users (POST)
// Acción de creación (a donde se envía el formulario)

// 5. /users/:id/edit (GET)
// Formulario de edición de usuarios

// 6. /users/:id (PUT)
// Acción de edición (a donde se envía el formulario):

// 7. /users/:id (DELETE)

module.exports = router;