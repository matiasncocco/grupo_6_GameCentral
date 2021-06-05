let { readJson, writeJson, lastId } = require('./helper');

let title = '';
let products = readJson('products.json');

let productController = {
    // 1 GET: show all items
    index: (req,res) => {
        title = 'Todos los títulos'
        res.render('./products/product-index', {title, products});
    },

    // 2 GET: show product <form>
    create: (req,res) => {
        title = 'Nuevo producto';   
        res.render('./products/create', {title});
    },

    // 3 GET: show product detail
    show: (req,res) => {
        title = "Más info del juego";
        let gameId = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (products[i].id == gameId) {
                let productCategory = products[i].category;
                res.render('./products/show', {title,'product':products[i],productCategory});
            };
        };
    },
    
    // 4 POST: store product <form> fields
    store: (req,res) => {
        let product = {
            id: lastId(products) + 1,
            ... req.body,
        }
        products.push(product);
        writeJson(products,'products');
        res.redirect('/');
    },

    // 5 GET: show <form> with current product data
    // edit:

    // 6 POST: submit changes to existing product
    // update:

    // 7 DELETE: remove entry
    // destroy:
};

module.exports = productController;