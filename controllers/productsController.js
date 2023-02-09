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
    },
    update: (req, res) => {
		const idProductEdited = req.params.id;
        console.log(idProductEdited);
        console.log(req.body);
		const productToEdit = products.find( product => product.id == idProductEdited);
		const index = products.indexOf(productToEdit);
		const updatedProduct = req.body;
        console.log(updatedProduct);/*
		updatedProduct.price = Number(updatedProduct.price);
		updatedProduct.discount = Number(updatedProduct.discount);
		updatedProduct.id = productToEdit.id;
		updatedProduct.image = productToEdit.image;
		products[index] = updatedProduct;
        
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect("/products/" + idProductEdited);*/
	},
 };

 module.exports = productsController;
