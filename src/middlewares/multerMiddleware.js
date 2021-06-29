let multer = require('multer');
let path = require('path');

let productDestination = path.join(__dirname + '/..' + '/..' + '/public' + '/img' + '/products');

let storage = multer.diskStorage ({
    destination: (req,file,cb) => {
        // if product
        cb(null, productDestination);
        // else users
        // cb(null, userDestination);
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

let upload = multer( { storage } );

module.exports = upload;