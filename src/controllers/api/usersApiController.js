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
                console.log('el usuario ya existe');
            } else {
                return true;
            };
        } catch(err) {
            console.log(err);
        };
    },
};

module.exports = usersApiController;