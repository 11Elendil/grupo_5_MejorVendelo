 
 
 const usersController ={

    login:() =>{
        res.render('login');  
    }, 
    processLogin: function (req, res) {
    let errors = validationResult(req);
    
    if (errors.isEmpty()){

} else { 
    return res.render('login', {errors: errors.errors});
}}
};