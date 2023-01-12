const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: (req,res) => {
        const logueado = req.session.user ? req.session.user : undefined;
        return res.render("index.ejs", { products: products , logueado:logueado});
    },
    productCart: (req,res) => {
        const logueado = req.session.user ? req.session.user : undefined;
        return res.render("productCart.ejs", {logueado:logueado});
    },
  
}

module.exports = controller;