let { readJson, writeJson, lastId, percentageFinder, storeBool, paramFinder } = require('./helper');

let title = '';
let products = readJson('products.json');
products.forEach(product => {
    if (product.discount == true) {
        product.finalPrice = percentageFinder(product.price,product.discountRate);
    };
});

let productsController = {
    cart: (req,res) => {
        title = 'Carrito de compras';
        res.render('./products/cart', { title, products } );
    },

    // 1 GET: show all items
    index: (req,res) => {
        title = 'Todos los títulos'
        res.render('./products/index', { title, products } );
    },

    // 2 GET: show product <form>
    create: (req,res) => {
        title = 'Nuevo producto';
        let categoryPlaceholder = [
            'SHOOTER','SURVIVAL','RPG','BATTLE ROYALE'
        ];
        res.render('./products/create', { title, categoryPlaceholder } );
    },

    // 3 GET: show product detail
    show: (req,res) => {
        title = "Más info del juego";
        // paramFinder();
        let param = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (param == products[i].id) {
                let productCategory = products[i].category;
                let moneySaved = products[i].price - products[i].finalPrice;
                let shortDescription = products[i].description.substring(0,175);
                res.render('./products/show', { title,'product':products[i], productCategory, moneySaved, shortDescription } );
            };
        };
    },
    
    // 4 POST: store product <form> fields
    store: (req,res) => {
        let files = req.files;
        let { img, card } = files;
        // if (products == '')
        let product = {
            id: lastId(products) + 1,
            img: img[0].filename,
            card: card[0].filename,
            relevant: storeBool(req.body.relevant),
            inOffer: storeBool(req.body.inOffer),
            name: req.body.name,
            category: req.body.category,
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
        title = 'Editar';
        // paramFinder();
        let param = req.params.id;
        for (i = 0 ; i < products.length ; i++) {
            if (param == products[i].id) {
                let productCategory = products[i].category;
                res.render('./products/edit', { title, 'product':products[i], productCategory } );
            };
        };
    },

    // 6 POST: submit changes to existing product
    update: (req,res) => {
        let files = req.files;
        let { img, card } = files;
        // paramFinder();
        let param = req.params.id;
        products.forEach(product => {
            if (param == product.id) {
                if (img != undefined) {  
                    product.img = img[0].filename;
                };
                if (card != undefined ) {
                    product.card = card[0].filename;
                };
                product.name = req.body.name;
                product.category = req.body.category;
                product.relevant = storeBool(req.body.relevant);
                product.price = parseInt(req.body.price),
                product.inOffer = storeBool(req.body.inOffer);
                product.discount = req.body.discount;
                product.description = parseInt(req.body.discount),
                writeJson(products, 'products');
                res.redirect('/products');
            };
        });
    },

    // 7 DELETE: remove entry
    destroy: (req,res) => {
        let param = req.params.id;
        let newProducts = products.filter(product => param != product.id);
        writeJson(newProducts, 'products');
        res.redirect('/products');
    },
};

module.exports = productsController;