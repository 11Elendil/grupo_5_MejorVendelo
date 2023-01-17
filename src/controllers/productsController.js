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
   create: async (req,res)=>{
        const logueado = req.session.user ? req.session.user : undefined;

        const colors = await db.Colors.findAll();
        const sizes = await db.Size.findAll();
        const categories = await db.Category.findAll();
        const subCategories = await db.SubCategory.findAll(); 


        res.render('productForm', {logueado:logueado, colors: colors, sizes: sizes, categories: categories, subCategories:subCategories})
    },
    
    /*
    create: (req, res) => {
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
         */
    store: (req,res)=>{

        //return res.send(req.body)


        //EN LA DB FALTA EL ATRIBUTO CONDITION

        db.products.create({
          name: req.body.name,
          description: req.body.description,
          brand: req.body.brand,
          price: req.body.price,
          //image: req.file ? req.file.filename : '',
          image : "hardcodeando", //HAY QUE PONER UN VAR CHAR MAS GRANDE ACA EN LA DB
          subCategoriesId: req.body.subCategory,
          colorsId: req.body.color,
          categoriesId: req.body.category,
          sizesId: req.body.size,
        
      })


        return res.send("SE CREO EL PRODUCTO CORRECTAMENTE");
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