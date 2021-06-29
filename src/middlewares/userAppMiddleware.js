let globalUserMiddleware = (req,res,next) => {
    res.locals.user = false;
    if (req.session.loggedUser) {
        res.locals.user = true;
        res.locals.user = req.session.loggedUser;
    };
    next();
};

module.exports = globalUserMiddleware;