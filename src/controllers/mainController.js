let fs = require('fs');
let path = require('path');

let title = '';

let filePath = path.join(__dirname + '/../data/products.json');
let productsFile = fs.readFileSync(filePath,'UTF-8');
let products = JSON.parse(productsFile);

let inOffer = products.filter(product => {
    return product.discount == true;
});
let relevant = products.filter(product => {
    return product.relevant == true;
});

let mainController = {
    index: (req, res) => {
        title = 'Game Central';
        res.render('index',{title,products,inOffer,relevant});
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