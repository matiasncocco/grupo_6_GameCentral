let games = require('../database/data');

let productController = {
    games,

    renderCart: (req, res) => {
        let title = 'Carrito de compras';
        res.render('./products/shopping-cart', {'title': title});
    },

    renderNewProduct: (req, res) => {
        let title = 'Nuevo producto';
        res.render('./products/new-product', {'title': title});
    },

    renderProduct: (req, res) => {
        let idGame = req.params.id;
        for (i = 0 ; i < games.length ; i++) {
            if (idGame == games[i].title) {
                res.render('./products/game-detail', {'title':games[i].title,'game':games[i]});
            };
        };
    },
};

module.exports = productController;