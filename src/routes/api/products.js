let express = require('express');
let router = express.Router();
let productsApiController = require ('../../controllers/api/productsApiController');
const usersApiController = require('../../controllers/api/usersApiController');

router.get(
    '/',
    productsApiController.list
);

router.get(
    '/:id',
    productsApiController.oneGame
)

router.post(
    '/free-title',
    productsApiController.freeTitle
);

module.exports = router;