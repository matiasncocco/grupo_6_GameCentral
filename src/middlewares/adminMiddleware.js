let adminMiddleware = (req,res,next) => {
    let user = req.session.loggedUser;
    if (user) {
        console.log('hay usuario en admin');
        if (user.admin === true) {
            next();
        }else{
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    };
}

module.exports = adminMiddleware;