const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator')

const usersController = {

login: function(req, res){
    return res.render('users/login');
},
register: function(req, res){
  return  res.render('users/register');
},
create: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()){
    const user = {
        nombre: req.body.first_name,
        apellido: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    };

} else { 
    return res.render('login', {errors: errors.errors});
}
}
}
module.exports = usersController;