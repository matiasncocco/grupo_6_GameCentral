let express = require('express');
let router = express.Router();
let { list } = require('../../controllers/api/categoriesApiController');

router.get('/', list);

module.exports = router;