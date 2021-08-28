let db = require('../../database/models');

let usersApiController = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                users = users.map(user => {
                    delete user.dataValues.password;
                    delete user.dataValues.admin;
                    delete user.dataValues.country;
                    delete user.dataValues.createdAt;
                    delete user.dataValues.updatedAt;
                    user.dataValues.avatar = 'http://localhost:3001/img/users/' + user.dataValues.avatar;
                    return user.dataValues;
                });
                res.status(200).json({
                    status: 200,
                    count: users.length,
                    users
                });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    },

    lastUser: (req, res) => {
        db.User.findOne({
            order: [
                ['id', 'DESC']
            ]
        })
            .then(user => {
                user = {
                    identity: 'USUARIO',
                    id: user.id,
                    title: user.name + ' ' + user.surname,
                    img: 'http://localhost:3001/img/users/' + user.dataValues.avatar,
                };
                // delete user.dataValues.password;
                // delete user.dataValues.admin;
                // delete user.dataValues.country;
                // delete user.dataValues.createdAt;
                // delete user.dataValues.updatedAt;
                // user.dataValues.avatar = 'http://localhost:3001/img/users/' + user.dataValues.avatar;
                res.status(200).json({
                    stauts: 200,
                    user
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    err
                });
            });
    },

    oneUser: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                delete user.dataValues.password;
                delete user.dataValues.admin;
                delete user.dataValues.country;
                delete user.dataValues.createdAt;
                delete user.dataValues.updatedAt;
                user.dataValues.avatar = 'http://localhost:3001/img/users/' + user.dataValues.avatar;
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

    // para validación del front
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

    // para validación del front
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