let db = require('../../database/models');

let productsApiController = {
    list: (req,res) => {
        db.Game.findAll()
            .then(games => {
                let newGames = games.map(game => {
                    return{
                        id: game.id,
                        title: game.title,
                        description: game.description,
                        // platform: array con plataformas
                    };
                })
                res.status(200).json({
                    status: 200,
                    count: games.length,
                    // countPlatform: 
                    newGames
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

    freeTitle: async (req,res) => {
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