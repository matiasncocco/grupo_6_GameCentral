// let fs = require('fs');
// let path = require('path');

let { readJson, writeJson, lastId } = require('./helper');

let title = '';
let products = readJson('products.json');

let productController = {
    // 1 SHOW ALL PRODUCTS
    // index: (req,res) => {
    //   res.render('./producst/partials/product');  
    // },

    // 2
    create: (req,res) => {
        title = 'Nuevo producto';   
        res.render('./products/create',{title});
    },

    // 3
    show: (req,res) => {
        title = "Más info del juego";
        let gameId = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (products[i].id == gameId) {
                let productCategory = products[i].category;
                res.render('./products/show',{title,'product':products[i],productCategory});
            };
        };
    },
    
    // 4
    store: (req,res) => {
        let product = {
            id: lastId(products) + 1,
            ... req.body,
        }
        products.push(product);
        writeJson(products,'products');
        res.redirect('/');
    },

    // 5
    // edit (get = view current)

    // 6
    // update (post put = submit changes)

    // 7
    // destroy (post delete = remove item)
};

module.exports = productController;