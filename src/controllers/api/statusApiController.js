let db = require('../../database/models');

let statusApiController = {
    list: (req,res) => {
        db.Status.findAll({
            include: ['games']
        })
            .then(status => {
                res.json(status);
            })
            .catch(err => {
                res.send(err);
            });
    },
};

module.exports = statusApiController;