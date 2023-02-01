const {body, validationResult} = require ('express-validator');
    

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Solo se permiten imágenes en formato jpg, jpeg, png y gif.'));
    }
    cb(null, true);
  }
});





const validacionesProduct = [
  body('name').isLength({
        min: 5
      }).withMessage('El campo nombre no puede estar vacío'),
    
    body('condition').isLength({
        min: 20
    }).withMessage('Almenos  tiene que tener 20 carateres'),

    
    
    
    
      ]
module.exports = validacionesProduct;
