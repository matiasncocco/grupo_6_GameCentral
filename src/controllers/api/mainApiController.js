let db = require('../../database/models');

let mainApiController = {
    totals: async (req, res) => {
        const currentUrl = res.locals.currentUrl;
        let links = [
            `${ currentUrl }/api/users`,
            `${ currentUrl }/api/users/last`,
            `${ currentUrl }/api/products`,
            `${ currentUrl }/api/products/last`
        ];
        let totals = {};
        let gameCount = await db.Game.count();
        let categoryCount = await db.Category.count();
        let platformCount = await db.Platform.count();
        let userCount = await db.User.count();
        let saleCount = await db.UserGame.count();
        try {
            totals = {
                gameCount,
                categoryCount,
                platformCount,
                userCount,
                saleCount
            };
            res.status(200).json({
                status: 200,
                links,
                totals
            });
        } catch(err) {
            res.status(500).json({
                status: 500,
                err
            });
        };
    }
};

module.exports = mainApiController;