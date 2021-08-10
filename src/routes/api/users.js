let express = require('express');
let router = express.Router();
let usersApiController = require('../../controllers/api/usersApiController');

router.get('/', usersApiController.list);
router.get('/emails', usersApiController.emails);

module.exports = router;