
const express = require("express");
const {validationResult}= require("express-validator");
const {body}= require("express-validator");
const router = express.Router();




/*controller require*/
const productsController = require('../controllers/productsController'); 
const productValidationBack = require('../middleware/productValidation');
const path = require('path');

const multer = require('multer');
const guestValidation = require("../middleware/guestMiddleware");


const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, path.resolve('public/images'))
    },
    filename: function(req,file,cb){
        const uniqueName = Date.now();
        const fileExtension = path.extname(file.originalname);
        const newName = file.originalname.replace(fileExtension,'')
        cb( null,newName + '-' + uniqueName + fileExtension )
    }
})
const upload = multer({storage});




/* GET ALL PRODUCTS */

router.get('/', productsController.index)


/* GET ADD PRODUCTS */
router.get('/create',guestValidation ,productsController.create)
/* POST ADD PRODUCTS */
router.post('/', upload.single('image'),productValidationBack,productsController.store);



/* GET ONE PRODUCT */
router.get('/detail/:id', productsController.detail)
router.get('/:id/edit', productsController.edit); 
//router.post('/:id', upload.single('imageInput'), productsController.update);




// router.get ('/products)
router.post("/productEdit/:id", upload.single('imageInput'), productsController.update);


router.post('/productCart/:id', productsController.addProductCart)



module.exports = router