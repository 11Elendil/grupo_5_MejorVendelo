

module.exports = (sequelize, dataTypes) => {
  let alias = 'products';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
        Name: {
          type: dataTypes.STRING(100),
          allowNull: false
      },
      description: {
        type: dataTypes.TEXT,
        allowNull: false
    },
      Brand: {
          type: dataTypes.STRING(24),
          allowNull: false
      },
      categoriId:{ type: dataTypes.INTEGER},

      subCategoriId: {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      Price: {
          type: dataTypes.DECIMAL,
          allowNull: false
      },
      colorsId: {
        Type: dataTypes.INTEGER,
        allowNull: true
      },
      SizeID: {
        Type: dataTypes.INTEGER,
        allowNull: true
      },
      Image: { 
        Type: dataTypes.STRING,
        allowNull: true,
      }
    
  };
  let config = {
      timestamps: false,
      tableName: "Products"
  }
  const Products = sequelize.define(alias, cols, config); 

  //Aquí van las asociaciones

  categories.associate = function(models){
    categories.belongsTo(models.Type, {
        as: "Categories",
        foreignKey: "idCategories"
    }),
    Products.hasMany(models.Carts, {
      as: "Cart",
      foreignKey: "cartsId"
    }),
    Products.belongsTo(models.SubCategory, {
    as: "subCategories",
    foreignKey: "subCategoriesId"
    }),
    Products.hasMany(models.Color, {
      foreignKey: "productId"
    })

}
  return Products
};




/*

const { text } = require("body-parser");
const { DataTypes } = require("sequelize");
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: {
      type: DataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
  },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    brand: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    subCategoriesId: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    colorId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
}*/