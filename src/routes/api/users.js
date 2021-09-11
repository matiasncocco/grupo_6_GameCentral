let express = require('express');
let router = express.Router();
let usersApiController = require('../../controllers/api/usersApiController');

router.get(
    '/detail/:id',
    usersApiController.oneUser
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
    '/:id?',
    usersApiController.list
);

module.exports = router;