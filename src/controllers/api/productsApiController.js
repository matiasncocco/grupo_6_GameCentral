let { sequelize } = require('../../database/models');
let db = require('../../database/models');

let productsApiController = {
    list: async (req, res) => {
        let games = await db.Game.findAll();
        let countByCategory = await sequelize.query(
            'SELECT COUNT(category_id) as \'quantity\', categories.title AS \'title\' FROM category_game INNER JOIN categories ON categories.id = category_id GROUP BY category_id ORDER BY quantity DESC LIMIT 4', {
                model: db.CategoryGame
            }
        );
        let countByPlatform = await sequelize.query(
            'SELECT COUNT(platform_id) AS \'quantity\', platforms.title AS \'title\' FROM platform_game INNER JOIN platforms ON platforms.id = platform_id GROUP BY platform_id ORDER BY quantity DESC LIMIT 4', {
                model: db.PlatformGame
            }
        );
        let bestSellers = await sequelize.query(
            'SELECT COUNT(user_id) AS \'quantity\', users.name AS \'name\', users.surname AS \'surname\' FROM user_game  INNER JOIN users ON users.id = user_id WHERE name <> \'admin\' GROUP BY user_id ORDER BY quantity DESC LIMIT 4', {
                model: db.UserGame
            }
        );
            try {
                games = games.map(game => {
                    game = {
                        id: game.dataValues.id,
                        title: game.dataValues.title,
                        img: 'http://localhost:3001/img/products/' + game.dataValues.img,
                        url: game.dataValues.url = 'http://localhost:3001/api/products/' + game.dataValues.id
                    };
                    return game;
                });
                res.status(200).json({
                    status: 200,
                    games,
                    countByCategory,
                    countByPlatform,
                    bestSellers
                });
            } catch(err) {
                res.status(500).json({
                    status: 500,
                    err
                });  
            };
    },

    lastGame: (req, res) => {
        db.Game.findOne({
            order: [
                ['id', 'DESC']
            ]
        })
            .then(game => {
                game = {
                    identity: 'PRODUCTO',
                    id: game.id,
                    title: game.title,
                    img: 'http://localhost:3001/img/products/' + game.dataValues.img,
                    url: 'http://localhost:3001/api/products/' + game.dataValues.id
                }
                res.status(200).json({
                    status: 200,
                    game
                });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    },

    oneGame: (req, res) => {
        db.Game.findByPk(req.params.id, {
            include: [
                'categories',
                'platforms',
                'status',
            ]
        })
            .then (game => {
                let categories = [];
                game.categories.forEach(category => {
                    categories.push(category.dataValues.title);
                });
                let platforms = [];
                game.platforms.forEach(platform => {
                    platforms.push(platform.dataValues.title);
                });
                let status = [];
                game.status.forEach(statu => {
                    status.push(statu.dataValues.name);
                });
                game = {
                    id: game.id,
                    title: game.title,
                    img: 'http://localhost:3001/img/users/' + game.dataValues.img,
                    price: game.price,
                    discount: game.discount,
                    description: game.description,
                    categories: categories,
                    platforms: platforms,
                    status: status
                };
                res.status(200).json({
                    status: 200,
                    game
                });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    },

    // para validación del front
    freeTitle: async (req, res) => {
        let checkTitle = await db.Game.findOne({
            where: {
                title: req.body.title
            }
        });
        try {
            if (!checkTitle) {
                res.status(200).json({
                    result: true,
                    status: 200,
                    msg: 'Available'
                });
            } else {
                res.status(200).json({
                    result: false,
                    status: 200,
                    msg: 'El título ingresado ya existe en nuestra base de datos'
                });
            };
        } catch(err) {
            throw new Error(err)
        };
    },
};

module.exports = productsApiController;