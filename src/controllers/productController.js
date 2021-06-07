const { response } = require('express');
let { readJson, writeJson, lastId } = require('./helper');

let title = '';
let products = readJson('products.json');

let productController = {
    cart: (req,res) => {
        title = 'Carrito de compras';
        res.render('./products/cart', { title, products } );
    },
    // 1 GET: show all items
    index: (req,res) => {
        title = 'Todos los títulos'
        res.render('./products/product-index', { title, products } );
    },

    // 2 GET: show product <form>
    create: (req,res) => {
        title = 'Nuevo producto';   
        res.render('./products/create', { title } );
    },

    // 3 GET: show product detail
    show: (req,res) => {
        title = "Más info del juego";
        let gameId = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (products[i].id == gameId) {
                let productCategory = products[i].category;
                res.render('./products/show', { title,'product':products[i],productCategory } );
            };
        };
    },
    
    // 4 POST: store product <form> fields
    store: (req,res) => {
        let files = req.files;
        let { img, card, capsule } = files;
        let product = {
            id: lastId(products) + 1,
            img: img[0].filename,
            card: card[0].filename,
            capsule: capsule[0].filename,
            ...req.body
        }
        products.push(product);
        writeJson(products, 'products');
        res.redirect('/');
    },

    // 5 GET: show <form> with current product data
    edit: (req,res) => {
        title = 'Editar';
        let gameId = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (products[i].id == gameId) {
                let productCategory = products[i].category;
                res.render('./products/edit', { title, 'product':products[i], productCategory } );
            };
        };
    },

    // 6 POST: submit changes to existing product
    update: (req,res) => {
        // res.send(req.url);
        let gameId = req.params.id;
        // for (i = 0 ; i < products.length ; i++) {
        //     if (products[i].id == gameId) {
        //         //



        //     };
        // };
        
        
        // función que escribe el json
        // writeJson()
        
        // res.redirect('/products');
        // res.redirect('/product')
    },

    // 7 DELETE: remove entry
    destroy: (req,res) => {
        let gameId = req.params.id;
        let newProducts = products.filter(product => product.id != gameId);
        writeJson(newProducts, 'products');
        res.redirect('/products');
    },
};

module.exports = productController;