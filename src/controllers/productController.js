let fs = require('fs');
let path = require('path');

let title = '';

let filePath = path.join(__dirname + '/../database/products.json');
let productsFile = fs.readFileSync(filePath,'UTF-8');
let products = JSON.parse(productsFile);

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
    // store (post = add entry, send complete form)

    // 5
    // edit (get = view current)

    // 6
    // update (post put = submit changes)

    // 7
    // destroy (post delete = remove item)
};

module.exports = productController;