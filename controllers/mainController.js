const fs = require ('fs');
const path = require ('path');

const productsFilePath= path.join(__dirname,'../data/products.json');
const products =JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));

const controller = {
    index: (req,res) => {
   //lista de productos
        const HombreProducts =products.filter(product => product.categoria == 'Hombre');
        const MujerProducts =products.filter(product => product.categoria == 'Mujer');

        const viewData = {
            HombreProducts,
            MujerProducts
        }


        return res.render("index.ejs",viewData);
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