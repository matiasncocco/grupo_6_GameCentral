let express = require('express');
let router = express.Router();
let gamesApiController = require ('../../controllers/api/gamesApiController');

router.get(
    '/',
    gamesApiController.list
);

router.post(
    '/free-title',
    gamesApiController.freeTitle
);

module.exports = router;