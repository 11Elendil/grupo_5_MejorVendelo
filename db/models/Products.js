const { condition } = require("sequelize");


module.exports = (sequelize, dataTypes) => {
  let alias = 'products';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
        name: {
          type: dataTypes.STRING(100),
          allowNull: false
      },
      description: {
        type: dataTypes.TEXT,
        allowNull: false
    },
      brand: {
          type: dataTypes.STRING(24),
          allowNull: false
      },
      categoriesId:{ type: dataTypes.INTEGER},

      subCategoriesId: {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      price: {
          type: dataTypes.DECIMAL,
          allowNull: false
      },
      colorsId: {
        type: dataTypes.INTEGER,
        allowNull: true
      },
      sizesId: {
        type: dataTypes.INTEGER,
        allowNull: true
      },
      image: { 
        type: dataTypes.STRING,
        allowNull: true,
      },
      condition: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      sellerId: {
        type: dataTypes.INTEGER,
        allowNull:false,
      }
    
  };
  let config = {
      timestamps: false,
      tableName: "Products"
  }
  const Products = sequelize.define(alias, cols, config); 

  //Aquí van las asociaciones

  Products.associate = function(models){
    
    Products.belongsTo(models.SubCategory, {
    as: "subCategories",
    foreignKey: "subCategoriesId"
    }),

    Products.belongsTo(models.Colors, {
      as: "Colors",
      foreignKey: "colorsId"
    }),

    Products.belongsTo(models.Category, {
      as: "categories",
      foreignKey: "categoriesId"
      }),
  
    Products.belongsTo(models.Size, {
        as: "sizes",
        foreignKey: "sizesId"
      }),
    
    Products.belongsTo(models.User, {
      as:"users",
      foreignKey: "sellerId",
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