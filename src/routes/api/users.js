let express = require('express');
let router = express.Router();
let {
    oneUser,
    lastUser,
    freeEmail,
    checkEmail,
    list
} = require('../../controllers/api/usersApiController');

router.get(
    '/detail/:id',
    oneUser
);

router.get(
    '/last',
    lastUser
)

// para validación del front
router.post(
    '/free-email',
    freeEmail
);

// para validación del front
router.post(
    '/ok-email',
    checkEmail
);

router.get(
    '/:id?',
    list
);

module.exports = router;