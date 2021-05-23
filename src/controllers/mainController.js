let title = '';

let mainController = {
    index: (req, res) => {
        title = 'Game Central';
        res.render('index',{title});
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