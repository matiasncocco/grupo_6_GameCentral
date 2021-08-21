let express = require('express');
let router = express.Router();
let productsApiController = require ('../../controllers/api/productsApiController');

router.get(
    '/',
    productsApiController.list
);

router.post(
    '/free-title',
    productsApiController.freeTitle
);

module.exports = router;