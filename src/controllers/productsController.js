let { readJson, writeJson, lastId, storeBool, percentageFinder, toUpper } = require('./helper');

let db = require('../database/models');

let productsController = {
    cart: (req,res) => {
        let products = readJson('products.json');
        products.forEach(product => {
            if (product.inOffer == true) {
                product.finalPrice = percentageFinder(product.price,product.discount);
                return product;
            } else {
                product.discount = null;
                product.finalPrice = null;
                return product;
            };
        });
        res.render('./products/cart', {
            title: 'Carrito de compras',
            products
        });
    },

    // 1 GET: show all items
    index: (req,res) => {
        db.Game.findAll()
            .then(games => {
                res.render('./products/index', {
                    title: 'Todos los títulos',
                    games
                });
            })
            .catch(err => {
                res.render(err);
            });
    },

    // 2 GET: show product <form>
    create: (req,res) => {
        res.render('./products/create', {
            title: 'Nuevo producto',
            categoryPlaceholder: [
                'SHOOTER', 'SURVIVAL', 'RPG', 'BATTLE ROAYLE'
            ]
        });
    },

    // 3 GET: show product detail
    show: (req,res) => {
        let products = readJson('products.json');
        products.forEach(product => {
            if (product.inOffer == true) {
                product.finalPrice = percentageFinder(product.price,product.discount);
                return product;
            } else {
                product.discount = null;
                product.finalPrice = null;
                return product;
            };
        });
        let param = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (param == products[i].id) {
                let productCategory = products[i].category;
                let moneySaved = products[i].price - products[i].finalPrice;
                let shortDescription = products[i].description.substring(0,175);
                return res.render('./products/show', {
                    title: products[i].name,
                    product: products[i], 
                    productCategory, 
                    moneySaved, 
                    shortDescription 
                });
            };
        };
    },

    // 4 POST: store product <form> fields
    store: (req,res) => {
        let products = readJson('products.json');
        let files = req.files;
        let { img, card } = files;
        let product = {
            id: lastId(products) + 1,
            img: img[0].filename,
            card: card[0].filename,
            name: toUpper(req.body.name),
            category: req.body.category.map(toUpper),
            relevant: storeBool(req.body.relevant),
            inOffer: storeBool(req.body.inOffer),
            price: parseInt(req.body.price),
            discount: parseInt(req.body.discount),
            description: req.body.description
        };
        products.push(product);
        writeJson(products, 'products');
        res.redirect('/');
    },

    // 5 GET: show <form> with current product data
    edit: (req,res) => {
        let products = readJson('products.json');
        let param = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (products[i].id == param) {
                let productCategory = products[i].category;
                return res.render('./products/edit', {
                    title: 'Edición de producto', 
                    product: products[i], 
                    productCategory 
                });
            };
        };
    },

    // 6 POST: submit changes to existing product
    update: (req,res) => {
        let products = readJson('products.json');
        let files = req.files;
        let { img, card } = files;
        let param = req.params.id;
        products.forEach(product => {
            if (param == product.id) {
                if (img != undefined) {  
                    product.img = img[0].filename;
                };
                if (card != undefined ) {
                    product.card = card[0].filename;
                };
                product.name = toUpper(req.body.name);
                product.category = req.body.category.map(toUpper);
                product.relevant = storeBool(req.body.relevant);
                product.inOffer = storeBool(req.body.inOffer);
                product.price = parseInt(req.body.price);
                product.discount = parseInt(req.body.discount);
                product.description = req.body.description;
                writeJson(products, 'products');
                return res.redirect('/products');
            };
        });
    },

    // 7 DELETE: remove entry
    destroy: (req,res) => {
        let products = readJson('products.json');
        let param = req.params.id;
        let newProducts = products.filter(product => param != product.id);
        writeJson(newProducts, 'products');
        res.redirect('/products');
    },
};

module.exports = productsController;