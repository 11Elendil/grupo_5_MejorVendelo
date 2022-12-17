const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: (req,res) => {
        return res.render("index.ejs", { products: products });
    },
    productCart: (req,res) => {
        return res.render("productCart.ejs");
    },
  
}

module.exports = controller;