let express = require('express');
let router = express.Router();
// let { list } = require('../../controllers/api/platformsApiController');
// router.get('/', list);

let platformsApiController = require ('../../controllers/api/platformsApiController')
router.get('/', platformsApiController.list)


module.exports = router;