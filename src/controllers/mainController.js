let fs = require('fs');
let path = require('path');

let title = '';

let filePath = path.join(__dirname + '/../database/products.json');
let productsFile = fs.readFileSync(filePath,'UTF-8');
let products = JSON.parse(productsFile);

let mainController = {
    index: (req, res) => {
        title = 'Game Central';
        res.render('index',{title,products});
    },
    cart: (req,res) => {
        title = 'Carrito de compras';
        res.render('cart',{title});
    },
    termsConditions: (req,res) => {
        title = 'Términos & Condiciones';
        res.render('terms-conditions',{title});
    },
};

module.exports = mainController;