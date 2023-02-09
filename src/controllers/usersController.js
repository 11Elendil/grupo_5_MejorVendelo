const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator')
//users tiene la base de usuarios

const  db = require("../../db/models");
const { Op } = require('sequelize');

const users = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
  encoding: 'utf-8'
});
const usersController = {
    login: function (req, res)
    {
        return res.render('users/login')
    },
    logout: function (req, res)
    {
        req.session.destroy();
        return res.render('users/login')
    },
    
    perfil: async function (req, res)
    {
        if (req.session.user){
          const user = await db.User.findByPk(req.session.user.id)
          return res.render('users/perfil', {user:user})
        }
        return res.send("no estas logeado")
    },

    register: function(req, res){
        return  res.render('users/register');
      },
    
    
    create: (req, res) => {
      let errors = validationResult(req);
  
      if (errors.isEmpty()) {

            db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                typeId : req.body.type,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar:  req.file ? req.file.filename : '',
            })

            return res.render("users/login")

        } else {
          
          return res.render('users/register', {
            errors: errors.errors,  old: req.body
          });
          
            
        
        }
      },
     
      ingresar: async (req, res, next) =>{
        
        
        const usuarios = await db.User.findAll();

        let usuarioLogueado = usuarios.find(usuario => usuario.email == req.body.email)

        req.session.user = usuarioLogueado.dataValues;

        if (req.session.user){
          const user = req.session.user
          return res.render('users/perfil', {user:user})
        }
        return res.send("no estas logeado")
      },

      edit: function (req, res)
      {
          if (req.session.user){
            const user = req.session.user
            return res.render('users/edit', {user:user})
          }
          return res.send("no estas logeado")
      },
      
      editStore: (req, res) => {
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
  
              db.User.update({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  typeId : req.body.type,
                  avatar:  req.file ? req.file.filename : '',
              },{
                where: {id: req.session.user.id}
              }
              )
  
              return res.send("se actualizo correctamente")
  
          } else {
            
            return res.render('users/register', {
              errors: errors.errors,  old: req.body
            });
            
              
          
          }
        },

        myProducts: async (req, res) =>
        {
          const products = await db.products.findAll({
            where: {
              sellerId: req.session.user.id,
            }
          });            
          return res.render('users/myProducts' , {products:products})
        },

        myProductDetail : async (req,res)=>{
          const logueado = req.session.user ? req.session.user : undefined;
          const product = await db.products.findByPk(req.params.id);
  
          if(!product){
              res.send( 'no existe el producto')
              }   
          return res.render('users/myProductsDetail/' , {product:product, logueado:logueado})
      
      },
      myProductsDelete: async (req,res) => {

        db.products.destroy({
          where:{id: req.params.id}
        })

        return res.send("Se borro el producto")
      },
      editMyProduct: async (req,res) => {
        
        const myProduct = await db.products.findByPk(req.params.id);

        return res.render("productEdit", {logueado: true, product: myProduct})

º      }
}

module.exports = usersController;
