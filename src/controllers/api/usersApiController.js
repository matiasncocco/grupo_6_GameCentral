let db = require('../../database/models');

let usersApiController = {
    list: (req,res) => {
        db.User.findAll()
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                res.send(err);
            });
    },
};

module.exports = usersApiController;