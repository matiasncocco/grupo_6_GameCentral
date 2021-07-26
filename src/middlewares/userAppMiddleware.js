let db = require('../database/models');

let globalUserMiddleware = (req,res,next) => {
    if (req.cookies.userEmail) {
        let cookieEmail = req.cookies.userEmail;
        db.User.findOne({
            where: {
                email: cookieEmail
            }
        })
        .then(cookieUser => {
            if (cookieUser != null) {
                delete cookieUser.password;
                return req.session.loggedUser = cookieUser;
            };
        })
        .catch(err => {
            res.status(500).render('error', {
                status: 500,
                title: 'ERROR',
                errorDetail: err
            });
        })
    };
    res.locals.user = false;
    if (req.session.loggedUser) {
        res.locals.user = true;
        res.locals.user = req.session.loggedUser;
        return next();
    };
    return next();
};

module.exports = globalUserMiddleware;