let db = require('../../database/models');

let productsApiController = {
    list: (req, res) => {
        db.Game.findAll({ include : [ 'platforms', 'categories' ] })
        .then(games => {
            let newGames = 
            games.map(game => {   
                // category = game.categories.findByPk(game.categories.id)
                //     .then(categ => {
                //         res.send(categ)
                // //     });
                // return {
                //     categoryById: game.categories.map(cate => {
                //         return cate.id
                //         }
                //     ),
                    // game: game,
                    // id: game.id,
                    // title: game.title,
                    // description: game.description,
                    // platform: game.platforms.map(plat => {
                    //     return { title: plat.title }
                    // }),
                    // categories: game.categories.map(cate => {
                    //     return { title: cate.title }
                    // }),
                // };
            })
                res.status(200).json({
                    status: 200,
                    count: games.length,
                    // countByCategorie: ,
                    newGames,
                })
            })
        .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                })
            });
    },

    oneGame: (req, res) => {
        db.Game.findByPk(req.params.id)
            .then (game => {
                res.status(200).json({
                    status: 200,
                    game
                    // categorias:
                    // plataformas:
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    },

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