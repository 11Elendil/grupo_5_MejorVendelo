 const fs = require('fs')
 const path = require('path')

 const productsFilePath = path.join(__dirname,"../data/products.json");
 const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
 
 
 const productsController = {
    index: (req,res)=>{
        res.render('products',{products:products})
    },
   
    detail : (req,res)=>{
    const productDetail = req.params.id
    const product = products.find((product)=> product.id == productDetail)
    if(product){
        res.render('productDetail' , {product:product})
    }
    return res.send( 'no existe el producto')
    },
    create: (req,res)=>{
        res.render('productForm')
    },
    store: (req,res)=>{
        const newProductField = req.body;
        /* AGREGANDO EL PRODUCTO*/
        newProductField.id = products.length,
        newProductField.image = req.file.filename;
        /*SUMANDO AL ARRAY */
        products.push(newProductField);

        fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2));

        return res.send(req.file);
    },
    edit: (req, res) =>{
        const idProduct = req.params.id;
		const product = products.find( product => {
			return product.id == idProduct
		})
		res.render("prodcutEdit", { product })
    }
 };

 module.exports = productsController;