'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    category_id: DataTypes.INTEGER,
    subcategory_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    color_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};