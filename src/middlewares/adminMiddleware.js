let adminMiddleware = (req,res,next) => {
    let user = req.session.loggedUser;
    if (user && user.admin === true) {
        next();
    }else{
        res.redirect('/');
    };
}

module.exports = adminMiddleware;