let express = require('express');
let router = express.Router();
let usersApiController = require('../../controllers/api/usersApiController');

router.get(
    '/',
    usersApiController.list
);

router.get(
    '/last',
    usersApiController.lastUser
)

// para validación del front
router.post(
    '/free-email',
    usersApiController.freeEmail
);

// para validación del front
router.post(
    '/ok-email',
    usersApiController.checkEmail
);

router.get(
    '/:id',
    usersApiController.oneUser
);

module.exports = router;