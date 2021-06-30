let { readJson } = require('../controllers/helper');

let globalUserMiddleware = (req,res,next) => {
    let users = readJson('users.json');
    if (req.cookies.userEmail) {
        let cookieEmail = req.cookies.userEmail;
        let userCookie = users.find(user => user.email == cookieEmail);
        if (userCookie) {
            delete userCookie.password;
            req.session.loggedUser = userCookie;
        };
    };
    res.locals.user = false;
    if (req.session.loggedUser) {
        res.locals.user = true;
        res.locals.user = req.session.loggedUser;
        return next();
    };
    next();
};

module.exports = globalUserMiddleware;