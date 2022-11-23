login: function(req, res){
    return res.render('login');
},
processLogin: function (req, res) {
    let errors = validationResult(req);
    
    if (errors.isEmpty())

} else { 
    return res.render('login', {errors: errors.errors});
}