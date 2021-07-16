let { readJson, percentageFinder } = require('./helper');

let mainController = {
    index: (req, res) => {
        title = 'Game Central';
        let products = readJson('products.json');
        products.forEach(product => {
            if (product.inOffer == true) {
                product.finalPrice = percentageFinder(product.price,product.discount);
            } else {
                product.discoutn = null;
                product.finalPrice = null;
            };
        });
        let inOffer = products.filter(product => {
            return product.inOffer === true;
        });
        let relevant = products.filter(product => {
            return product.relevant === true;
        });
        res.render('index', {
            title: 'Game Central',
            inOffer,
            relevant
        });
    },
    
    termsConditions: (req,res) => {
        title = 'Términos & Condiciones';
        res.render('terms-conditions', {
            title: 'Términos & Condiciones' 
        });
    },

};

module.exports = mainController;