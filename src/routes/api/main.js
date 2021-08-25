let express = require('express');
let router = express.Router();
let mainApiController = require('../../controllers/api/mainApiController');

router.get(
    '/',
    mainApiController.totals
);

module.exports = router;