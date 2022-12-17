
const express = require("express");
const router = express.Router();

/*controller require*/
const productsController = require('../controllers/productsController') 

const path = require('path');

const multer = require('multer');


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
router.get('/create', productsController.create)
/* POST ADD PRODUCTS */
router.post('/', upload.single('image'), productsController.store)


/* GET ONE PRODUCT */
router.get('/detail/:id', productsController.detail)
router.get('/:id/edit', productsController.edit); 
//router.put('/:id', productsController.update);

// router.get ('/products)
module.exports = router