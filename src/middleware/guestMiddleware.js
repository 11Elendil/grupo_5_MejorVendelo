const guestValidation = (req, res, next) => {

    if(!req.session.user){
        return res.redirect("/users/login")
    }
    return next();
}

module.exports = guestValidation;