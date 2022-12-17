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
      cb(null, path.resolve('../images/users'));    
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
];


router.get('/login', usersController.login);
router.post('/login', validacionesLogin,usersController.login);
router.get('/register', usersController.register);

/*router.post('/login',[
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
], usersController.processLogin);*/

module.exports = router;