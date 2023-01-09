const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator')
<<<<<<< Updated upstream
=======
//users tiene la base de usuarios


let db = require("../../db/models")
>>>>>>> Stashed changes

const usersController = {

    login: function(req, res) {
        // Validar la información del usuario
        let errors = validationResult(req);
    
        // Si hay errores, renderizar la vista de login con los errores
        if (!errors.isEmpty()) {
            return res.render('users/login', {errors: errors.errors});
        }
    
<<<<<<< Updated upstream
        // Si no hay errores, verificar si el usuario está registrado en el archivo de usuarios
        let archivoUsuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        let usuarioRegistrado = false;
        for (let i = 0; i < archivoUsuarios.length; i++) {
            if (archivoUsuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, archivoUsuarios[i].password)) {
                usuarioRegistrado = true;
                break;
            }
        }
    
        // Si el usuario está registrado, redirigir al usuario a la página principal o a otra página de la aplicación
        if (usuarioRegistrado) {
            // Redirigir al usuario a la página principal o a otra página de la aplicación
            res.redirect('/');
=======
    create: (req, res) => {
      let errors = validationResult(req);
      //res.send(errors);
        if (errors.isEmpty()) {

          console.log("NO HUBO ERRORES")
          
          db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            type : 1,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar:  req.file ? req.file.filename : '',
          })

          return res.send("SE CREO EL USUARIO EN LA BASE DE DATOS")
          
>>>>>>> Stashed changes
        } else {
            // Si el usuario no está registrado, renderizar la vista de login con un mensaje de error
            res.render('users/login', {error: 'Usuario o contraseña no válidos'});
        }
    },
    register: function(req, res){
        return  res.render('users/register');
      },
    

<<<<<<< Updated upstream
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
=======
    if (req.session.user){
      const user = req.session.user
      return res.render('users/perfil', {user:user})
    }
    return res.send("no estas logeado")

  },
>>>>>>> Stashed changes
}
}
}
module.exports = usersController;