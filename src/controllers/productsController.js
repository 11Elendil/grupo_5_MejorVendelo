 const fs = require('fs')
 const path = require('path')

 const  db = require("../../db/models")
 
 const productsController = {
    index: async(req,res)=>{
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

        //return res.send(req.body)


        //EN LA DB FALTA EL ATRIBUTO CONDITION

        db.products.create({
          name: req.body.name,
          description: req.body.description,
          brand: req.body.brand,
          price: req.body.price,
          image: req.file ? req.file.filename : '',
          subCategoriesId: req.body.subCategory,
          colorsId: req.body.color,
          categoriesId: req.body.category,
          sizesId: req.body.size,
        
      })


        return res.send("SE CREO EL PRODUCTO CORRECTAMENTE");
    },


    edit: async (req, res) =>{
        const logueado = req.session.user ? req.session.user : undefined;
        
        const product = await db.products.findByPk(req.params.id);

		res.render("prodcutEdit", { product:product , logueado:logueado})
    }
 };

 module.exports = productsController;