let express = require('express');
let router = express.Router();

let statusApiController = require ('../../controllers/api/statusApiController')
router.get('/', statusApiController.list)


module.exports = router;