let db = require('../../database/models');

let gamesApiController = {
    list: (req,res) => {
        db.Game.findAll()
            .then(games => {
                res.json(games);
            })
            .catch(err => {
                res.send(err);
            });
    }
};

module.exports = gamesApiController;