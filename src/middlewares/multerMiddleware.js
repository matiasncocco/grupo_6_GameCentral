let multer = require('multer');
let path = require('path');

let productDestination = path.join(__dirname + '/..' + '/..' + '/public' + '/img' + '/products');
let userAvatarDestination = path.join(__dirname + '/..' + '/..' + '/public' + '/img' + '/users');

let storage = multer.diskStorage ({
    destination: (req,file,cb) => {
        let { fieldname } = file;
        if (fieldname === 'avatar') {
            cb(null, userAvatarDestination);
        } else {
            cb(null, productDestination);
        };
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

let upload = multer( { storage } );

module.exports = upload;