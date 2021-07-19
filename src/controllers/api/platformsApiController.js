let db = require('../../database/models');

let platformsApiController = {
    list: (req, res) => {
        db.Platform.findAll({
            include: ['games']
        })
            .then(platforms => {
                res.json(platforms);
            })
            .catch(err => {
                res.send(err);
            });
    },
};

module.exports = platformsApiController;