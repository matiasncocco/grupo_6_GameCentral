let guestMiddleware = (req,res,next) => {
    if (req.session.loggedUser) {
        res.redirect('/');
    }
    next();
};

module.exports = guestMiddleware;