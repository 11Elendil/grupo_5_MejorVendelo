 const fs = require('fs')
 const path = require('path')

 const productsFilePath = path.join(__dirname,"../data/products.json");
 const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
 const  db = require("../../db/models")
 
 const productsController = {
    index: (req,res)=>{
        const logueado = req.session.user ? req.session.user : undefined;
        res.render('products',{products:products, logueado:logueado})
    },
   
    detail : (req,res)=>{
        const logueado = req.session.user ? req.session.user : undefined;
        const productDetail = req.params.id
        const product = products.find((product)=> product.id == productDetail)
        if(!product){
            res.send( 'no existe el producto')
            }   
        return res.render('productDetail' , {product:product, logueado:logueado})
    
    },
   /* create: (req,res)=>{
        const logueado = req.session.user ? req.session.user : undefined;
        res.render('productForm', {logueado:logueado})
    }*/create: (req, res) => {
      let errors = validationResult(req);
  
      if (errors.isEmpty()) {

            db.Product.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                typeId : req.body.type,
                avatar:  req.file ? req.file.filename : '',
            })

            return res.send("Se creo correctamente")

        } else {
          
          return res.render('users/register', {
            errors: errors.errors,  old: req.body
          });
          
            
        
        }
      },
    store: (req,res)=>{

        const newProductField = req.body;
        /* AGREGANDO EL PRODUCTO*/
        newProductField.price = Number(newProductField.price)
        newProductField.id = products.length + 1,
        newProductField.image = req.file.filename;
        /*SUMANDO AL ARRAY */
        products.push(newProductField);

        fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2));

        return res.send(req.file);
    },
    edit: (req, res) =>{
        const logueado = req.session.user ? req.session.user : undefined;
        const idProduct = req.params.id;
		const product = products.find( product => {
			return product.id == idProduct
		})
		res.render("prodcutEdit", { product , logueado:logueado})
    }
 };

 module.exports = productsController;