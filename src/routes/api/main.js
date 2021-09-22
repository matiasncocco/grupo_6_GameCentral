let express = require('express');
let router = express.Router();
let { totals } = require('../../controllers/api/mainApiController');

router.get(
    '/',
    totals
);

module.exports = router;