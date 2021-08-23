let db = require('../../database/models');

let categoriesApiController = {
    list: (req,res) => {
        db.Category.findAll()
            .then(categories => {
                res.status(200).json({
                    status: 200,
                    data: categories
                });
            })
            .catch(err => {
                res.send(err);
            });
    }
};

module.exports = categoriesApiController;