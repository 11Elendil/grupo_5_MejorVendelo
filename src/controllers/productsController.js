 const fs = require('fs')
 const path = require('path')

 const  db = require("../../db/models")
 
 const productsController = {
    index: async (req,res)=>{
        const logueado = req.session.user ? req.session.user : undefined;
        const products = await db.products.findAll();

        res.render('products',{products:products, logueado:logueado})
    },
   
    detail : async (req,res)=>{
        const logueado = req.session.user ? req.session.user : undefined;
        const product = await db.products.findByPk(req.params.id);

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
    

    store: (req,res)=>{

        db.products.create({
          name: req.body.name,
          description: req.body.description,
          brand: req.body.brand,
          condition: req.body.condition,
          price: req.body.price,
          image: req.file ? req.file.filename : '',
          subCategoriesId: req.body.subCategory,
          colorsId: req.body.color,
          categoriesId: req.body.category,
          sizesId: req.body.size,
          sellerId: req.session.user.id,
        });
    
        return res.redirect('/');
    },
    edit: async (req, res) =>{
        const logueado = req.session.user ? req.session.user : undefined;
        
        const product = await db.products.findByPk(req.params.id);

		res.render("prodcutEdit", { product:product , logueado:logueado})
    },
    
    update: async (req,res) => {

        console.log("ESE ES EL NUEVO NAME: ", req.body);
        console.log("ESE ES EL NUEVO NAME: ", req.body.price);

        console.log("ESE ES EL ID: ", req.params.id);


        db.products.update({
            name: req.body.name,
        },{
          where: {id: req.params.id}
        }
        )

        return res.send("Se actualizo correctamente")
    }
 };

 module.exports = productsController;