let db = require('../../database/models');

let usersApiController = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                console.log(err);
            });
    },

    freeEmail: async (req, res) => {
        let checkUser = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });
        try {
            if (!checkUser) {
                res.status(200).json({
                    result: true,
                    status: 200,
                    msg: 'Available'
                });
            } else {
                res.status(200).json({
                    result: false,
                    status: 200,
                    msg: 'El e-mail ya está en uso'
                });
            };
        } catch(err) {
            console.log(err);
        };
    },

    checkEmail: async (req, res) => {
        let checkUser = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });
        try {
            if (!checkUser) {
                res.status(200).json({
                    result: false,
                    status: 200,
                    msg: 'Revisá tu e-mail'
                });
            } else {
                res.status(200).json({
                    result: true,
                    satuts: 200,
                    msg: 'OK'
                });
            };
        } catch(err) {
            console.log(err);
        };
    }
};

module.exports = usersApiController;