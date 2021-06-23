let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController');
let upload = require('../middlewares/multerMiddleware');

router.get('/login', usersController.login);
router.get('/', usersController.index); // 1 show user list
router.get('/register', usersController.register); // 2 show register <form>
router.post('/', upload.single('avatar'), usersController.processRegister); // 4 store user
router.get('/:id', usersController.show); // 3 show single user data

// 5. /users/:id/edit (GET)
// Formulario de edición de usuarios

// 6. /users/:id (PUT)
// Acción de edición (a donde se envía el formulario):

// 7. /users/:id (DELETE)

module.exports = router;