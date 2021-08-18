let express = require('express');
let router = express.Router();
let usersApiController = require('../../controllers/api/usersApiController');

router.get(
    '/',
    usersApiController.list
);

// router.post(
//     '/email',
//     usersApiController.checkEmail
// );

module.exports = router;