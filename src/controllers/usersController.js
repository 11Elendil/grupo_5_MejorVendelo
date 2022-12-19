const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const { validationResult } = require('express-validator')

const usersController = {
    login: function (req, res)
    {
        res.render('users/login')
    },

    register: function(req, res){
        return  res.render('users/register');
      },
    
      create: (req, res) => {
       
       let errors = validationResult(req);
        if (errors.isEmpty()) {
          let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            type : req.body.type,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar:  req.file ? req.file.filename : '',
          }
          let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
            encoding: 'utf-8'
          });
          let users;
          if (archivoUsers == "") {
            users = [];
          } else {
            users = JSON.parse(archivoUsers);
          };
    
          users.push(user);
          usersJSON = JSON.stringify(users, null, 2);
          fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersJSON);
          res.redirect('/users/login');
        } else {
          
            
          return res.render(path.resolve(__dirname, '../views/users/register'), {
            errors: errors.errors,  old: req.body
            
          });
        }
      },

ingresar: (req, res) =>{
    
    const errors = validationResult(req);
    //return res.send(errors.mapped());
    if(errors.isEmpty()){
      let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
      let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
      //return res.send(usuarioLogueado);
      //Como podemos modificar nuestros req.body
      delete usuarioLogueado.password;
      req.session.usuario = usuarioLogueado;  //Guardar del lado del servidor
      //Aquí voy a guardar las cookies del usuario que se loguea
      if(req.body.recordarme){
        res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
      }
      return res.render('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home - a donde deseen)

    }else{
      //Devolver a la vista los errores
      return res.render('/users/login', {errors: errors.errors});

    }
  },
}

module.exports = usersController;