let express = require('express');
let router = express.Router();
let categoriesApiController = require('../../controllers/api/categoriesApiController');

router.get(
    '/',
    categoriesApiController.list
);

module.exports = router;