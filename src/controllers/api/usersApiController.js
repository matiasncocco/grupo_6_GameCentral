let db = require('../../database/models');

let usersApiController = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                let newUsers = users.map(user => {
                    return {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        avatar: user.avatar,
                        newsletter: user.newsletter,
                        // country: user.country
                    };
                });
                res.status(200).json({
                    status: 200,
                    count: users.length,
                    newUsers
                });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    },

    oneUser: (req,res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                delete user.dataValues.password;
                res.status(200).json({
                    stauts: 200,
                    user
                });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
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
            throw new Error(err);
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
            throw new Error(err);
        };
    }
};

module.exports = usersApiController;