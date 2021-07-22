let { readJson, writeJson, storeBool, numberOrNull, stringOrNull } = require('./helper');

let db = require('../database/models');
// const { sequelize } = require('../database/models');

let productsController = {
    // 0 GET: carrito
    // ¡LISTO POR SEQUELIZE!
    cart: (req,res) => {
        db.Game.findAll({
            include: [
                'status',
                'platforms'
            ]
        })
            .then(games => {
                res.render('./products/cart', {
                    title: 'Carrito de compras',
                    games
                });
            })
            .catch(err => {
                res.status(500).render('error', {
                    status: 500,
                    title: 'ERROR',
                    errorDetail: err
                });
            });
    },

    // 1 GET: show all items
    // ¡LISTO POR SEQUELIZE!
    index: (req,res) => {
        db.Game.findAll({
            include: ['status']
        })
            .then(games => {
                res.render('./products/index', {
                    title: 'Todos los títulos',
                    games
                });
            })
            .catch(err => {
                res.status(500).render('error', {
                    status: 500,
                    title: 'ERROR',
                    errorDetail: err
                });
            });
    },

    // 2 GET: show product <form>
    // por sequelize: en progreso
    create: async (req,res) => {
        let properties = {};
        let categories = await db.Category.findAll();
        let platforms = await db.Platform.findAll();
        let status = await db.Status.findAll();
        try {
            properties.categories = categories;
            properties.platforms = platforms;
            properties.status = status;
            res.render('./products/create', {
                title: 'Nuevo producto',
                properties
            });
        }
        catch(err) {
            res.status(500).render('error', {
                status: 500,
                title: 'ERROR',
                errorDetail: err
            });
        };
    },

    // 3 GET: show product detail
    // ¡LISTO POR SEQUELIZE!
    show: (req,res) => {
        db.Game.findByPk(req.params.id, {
            include: [
                'categories',
                'platforms'
            ]
        })
            .then(game => {
                res.render('./products/show', {
                    title: game.title,
                    game
                });
            })
            .catch(err => {
                res.status(500).render('error', {
                    status: 500,
                    title: 'ERROR',
                    errorDetail: err
                });
            });
    },

    // 4 POST: store product <form> fields
    // por sequelize: en progreso
    store: async (req,res) => {
        let categories = req.body.categories;
        return res.send(categories)
        await db.Game.create({
            title: req.body.title.toUpperCase(),
            img: req.file.filename,
            price: parseFloat(req.body.price),
            discount: numberOrNull(req.body.discount),
            description: stringOrNull(req.body.description),
            categories: await db.CategoryGame.bulkCreate([
                {
                    categoryId: req.body.categories[0]
                },
                {
                    categoryId: req.body.categories[1]
                },
                {
                    categoryId: req.body.categories[2]
                },
                {
                    categoryId: req.body.categories[3]
                }
            ])
        },{
            include: ['categories']
        });
        // await db.CategoryGame.bulkCreate([
        //     {
        //         categoryId: req.body.categories[0]
        //     },
        //     {
        //         categoryId: req.body.categories[1]
        //     },
        //     {
        //         categoryId: req.body.categories[2]
        //     },
        //     {
        //         categoryId: req.body.categories[3]
        //     }
        // ]);
        try {
            res.redirect('/products');
        }
        catch(err) {
            res.status(500).render('error', {
                status: 500,
                title: 'ERROR',
                errorDetail: err
            });
        };
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