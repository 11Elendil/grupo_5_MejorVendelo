const fs = require('fs');
const  db = require("../../db/models")


const controller = {
    index: async (req,res) => {
        const logueado = req.session.user ? req.session.user : undefined;
        const products = await db.products.findAll();
        return res.render("index.ejs", { products: products , logueado:logueado});
    },
    productCart: (req,res) => {
        const logueado = req.session.user ? req.session.user : undefined;
        return res.render("productCart.ejs", {logueado:logueado});
    },
  
}

module.exports = controller;