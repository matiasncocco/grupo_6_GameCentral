let { readJson } = require('./helper');

let title = '';
let products = readJson('products.json');

let inOffer = products.filter(product => {
    return product.discount == 'true';
});
let relevant = products.filter(product => {
    return product.relevant == 'true';
});

// products
// if (discount = true)
// let finalPrice = ¿? 
// finalPrice = products.price / products.discountRate
// return finalPrice

let mainController = {
    index: (req, res) => {
        title = 'Game Central';
        res.render('index', { title, inOffer, relevant } );
    },
    
    termsConditions: (req,res) => {
        title = 'Términos & Condiciones';
        res.render('terms-conditions', { title } );
    },
};

module.exports = mainController;