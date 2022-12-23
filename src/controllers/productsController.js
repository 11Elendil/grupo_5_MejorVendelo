 const fs = require('fs')
 const path = require('path')

 const productsFilePath = path.join(__dirname,"../data/products.json");
 const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
 
 
 const productsController = {
    index: (req,res)=>{
        const logueado = req.session ? true : false;
        res.render('products',{products:products, logueado:logueado})
    },
   
    detail : (req,res)=>{
        const logueado = req.session ? true : false;     
        const productDetail = req.params.id
        const product = products.find((product)=> product.id == productDetail)
        if(!product){
            res.send( 'no existe el producto')
            }   
        return res.render('productDetail' , {product:product, logueado:logueado})
    
    },
    create: (req,res)=>{
        const logueado = req.session ? true : false;
        res.render('productForm', {logueado:logueado})
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
        const logueado = req.session ? true : false;
        const idProduct = req.params.id;
		const product = products.find( product => {
			return product.id == idProduct
		})
		res.render("prodcutEdit", { product , logueado:logueado})
    }
 };

 module.exports = productsController;