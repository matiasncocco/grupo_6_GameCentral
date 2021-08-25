let express = require('express');
let router = express.Router();
let productsApiController = require ('../../controllers/api/productsApiController');

router.get(
    '/',
    productsApiController.list
);

router.get(
    '/last',
    productsApiController.lastGame
);

router.post(
    '/free-title',
    productsApiController.freeTitle
);

// para validación del front
router.get(
    '/:id',
    productsApiController.oneGame
);

module.exports = router;