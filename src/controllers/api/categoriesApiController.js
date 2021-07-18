let db = require('../../database/models');

let categoriesApiController = {
    list: (req,res) => {
        db.Category.findAll({
            include: ['games']
        })
            .then(categories => {
                res.json(categories);
            })
            .catch(err => {
                res.send(err);
            });
    },
};

module.exports = categoriesApiController;