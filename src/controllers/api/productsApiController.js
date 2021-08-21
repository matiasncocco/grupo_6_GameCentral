let db = require('../../database/models');

let productsApiController = {
    list: (req,res) => {
        db.Game.findAll()
            .then(games => {
                res.json(games);
            })
            .catch(err => {
                throw new Error(err)
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