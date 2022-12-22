const autheticatedValidation = (req, res, next) => {

    if(req.session.user){
        return res.redirect("/perfil")
    }
    return next();
}

module.exports = autheticatedValidation;