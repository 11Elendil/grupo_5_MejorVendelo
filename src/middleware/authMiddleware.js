const autheticatedValidation = (req, res, next) => {

    if(req.session.user){
        return res.redirect("/users/perfil")
    }
    return next();
}

module.exports = autheticatedValidation;