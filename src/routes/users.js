const express = require('express');
const router = express.Router();
const path = require('path');

const bcrypt = require('bcryptjs');
const fs = require('fs');
const multer = require('multer');
const {body}= require ('express-validator');
const {validationResult} = require('express-validator');


const usersController = require('../controllers/usersController');
const validacionesLogin = require('../middleware/loginValidations');
const validacionesRegistro = require('../middleware/registerValidation');
const { ingresar } = require('../controllers/usersController');
const autheticatedValidation = require('../middleware/authMiddleware');
const guestValidation = require('../middleware/guestMiddleware');

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


//rustas login
router.get('/login',autheticatedValidation,usersController.login);
router.post('/login', validacionesLogin,usersController.ingresar);
//rutas register
router.get('/register',autheticatedValidation,usersController.register);
router.post('/register', upload.single('avatar'), validacionesRegistro, usersController.create);

router.get("/perfil",guestValidation ,usersController.perfil)

module.exports = router;



  
  
  
