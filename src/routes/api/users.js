let express = require('express');
let router = express.Router();
let usersApiController = require('../../controllers/api/usersApiController');

router.get('/', usersApiController.list);

module.exports = router;