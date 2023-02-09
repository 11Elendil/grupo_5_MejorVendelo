const {body, validationResult} = require ('express-validator');


const productsValidationBack = [
  body('name').isLength({
        min: 5
      }).withMessage('El nombre es obligatorio y debe tener al menos 5 caracteres'),
    body('description').isLength({min: 20
      }).withMessage('El campo descripcion debe tener al menos 20 caracteres'),
    
    
    //Aquí obligo a que el usuario seleccione su avatar
    body('image').custom((value, {req}) =>{
        if(req.file != undefined){
            return true
        }
        return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
  ]
module.exports = productsValidationBack;


