const fs = require('fs');
const  db = require("../../db/models")
const { Op } = require('sequelize');


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
  
    search: async (req, res) => {
        const logueado = req.session.user ? req.session.user : undefined;

        const query = req.query.q;
        if (!query) {
          return res.redirect('/');
        }
      
        try {
          const products = await db.products.findAll({
            where: {
              [Op.or]: [
                { name: { [Op.like]: `%${query}%` } },
                { description: { [Op.like]: `%${query}%` } },
               
              ],
            },
          });
          res.render('search', { products, logueado });
        } catch (err) {
          console.error(err);
          res.status(500).send('Error en la búsqueda');
        }
      }
}

module.exports = controller;