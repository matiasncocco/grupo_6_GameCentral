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