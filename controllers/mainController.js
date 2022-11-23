const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: (req,res) => {
        return res.render("index.ejs", { products: products });
    },

    login: (req,res) => {
        return res.render("login.ejs");
    },

    register: (req,res) => {
        return res.render("register.ejs");
    },

    productCart: (req,res) => {
        return res.render("productCart.ejs");
    },
  
}

module.exports = controller;