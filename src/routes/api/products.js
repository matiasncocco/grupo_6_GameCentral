let express = require('express');
let router = express.Router();
let productsApiController = require ('../../controllers/api/productsApiController');

router.get(
    '/detail/:id',
    productsApiController.oneGame
);

router.get(
    '/last',
    productsApiController.lastGame
);

// para validación del front
router.post(
    '/free-title',
    productsApiController.freeTitle
);

router.get(
    '/:id?',
    productsApiController.list
);

module.exports = router;