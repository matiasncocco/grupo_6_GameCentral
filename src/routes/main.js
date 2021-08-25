let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');

router.get(
    '/',
    mainController.index
);

router.get(
    '/terms-conditions',
    mainController.termsConditions
);

// this is wrong, but works
router.get(
    '/img/users/https://thispersondoesnotexist.com/',
    mainController.thisIsWrong
);

// en construcción
router.get(
    '/contact',
    mainController.contact
);

// en construcción
router.post(
    '/contact',
    mainController.processContact
);

module.exports= router;