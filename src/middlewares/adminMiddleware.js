let adminMiddleware = (req,res,next) => {
    if (req.session.loggedUser && req.session.loggedUser.admin === true) {
        return next();
    };
    res.redirect('/');
};

module.exports = adminMiddleware;