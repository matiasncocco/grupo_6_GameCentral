let express = require('express');
let router = express.Router();
let gamesApiController = require ('../../controllers/api/gamesApiController');

router.get(
    '/',
    gamesApiController.list
);

module.exports = router;