let db = require('../../database/models');

let usersApiController = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                res.send(err);
            });
    },

    checkEmail: async (req, res) => {
        let checkUser = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });
        try {
            if (checkUser) {
                res.status(200).json({
                    ok: false,
                    status: 200,
                    msg: 'El e-mail ya está en uso'
                });
            } else {
                res.status(200).json({
                    ok: true,
                    status: 200,
                    msg: 'Available'
                });
            };
        } catch(err) {
            console.log(err);
        };
    },
};

module.exports = usersApiController;