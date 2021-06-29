let adminMiddleware = (req,res,next) => {
    // let user = req.session.loggedUser;
    if (req.session.loggedUser && req.session.loggedUser.admin === true) {
        next();
    };
    res.redirect('/');
};

module.exports = adminMiddleware;