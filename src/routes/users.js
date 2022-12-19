const express = require('express');
const router = express.Router();
const path = require('path')

const bcrypt = require('bcryptjs');
const fs = require('fs');
const multer = require('multer');
const {body}= require ('express-validator');


const usersController = require('../controllers/usersController');
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('public/images/users'));    
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  }) 
const upload= multer({ storage })

const validacionesLogin = [
    body ('email').isEmail().withMessage('Email invalido'),
    body ('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('email').custom( (value  ) =>{
        for (let i = 0; i < archivoUsuarios.length; i++) {
            if (archivoUsuarios[i].email == value) {
                return true    
            }
        }
        return false
      }).withMessage('Usuario no se encuentra registrado...'),
      body('password').custom( (value, {req}) =>{
        for (let i = 0; i < archivoUsuarios.length; i++) {
            if (archivoUsuarios[i].email == req.body.email) {
                if(bcrypt.compareSync(value, archivoUsuarios[i].password)){
                  return true;
                }else{
                  return false;
                }
            }
        }
        
    }).withMessage('Usurio o contraseña no coinciden'),

];
const validacionesRegistro = [
  //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos  
  body('firstName').isLength({
        min: 1
      }).withMessage('El campo nombre no puede estar vacío'),
    body('lastName').isLength({min: 1
      }).withMessage('El campo apellido no puede estar vacío'),
    body('email').isEmail().withMessage('Agregar un email válido'),

    //Aquí valido el Password   
    body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
    
    //Aquí valido la confimación del password dispuesto por el usuario
    body('password').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),

    //Aquí valido si las contraseñas son iguales o no
    //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
    //El valor { req } corresponde a lo que viene desde el formulario

    body('password').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
    }).withMessage('Las contraseñas deben ser iguales'),

    //Aquí obligo a que el usuario seleccione su avatar
    body('avatar').custom((value, {req}) =>{
        if(req.file != undefined){
            return true
        }
        return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
  ]


  router.get('/login',usersController.login);
  router.post('/login', validacionesLogin,usersController.ingresar);
  router.get('/register',usersController.register);
  router.post('/register',upload.single('avatar'),usersController.create);




module.exports = router;