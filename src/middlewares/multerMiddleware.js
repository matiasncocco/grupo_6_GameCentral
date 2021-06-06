let multer = require('multer');
let path = require('path');

let destination = path.join(__dirname + '/..' + '/..' + '/public' + '/img' + '/aaa-multer');

let storage = multer.diskStorage ({
    destination: (req,file,cb) => {
        // 
    },
    
    filename: (req,file,cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

let upload = multer( { storage } );

module.exports = upload;