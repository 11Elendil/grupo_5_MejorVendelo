'use strict';
module.exports = (sequelize, dataTypes) => {
  let alias = 'Category';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
      genre: {
          type: dataTypes.STRING(100),
          allowNull: false
      },
  };
  let config = {
      timestamps: false,
      tableName: "categories"
  }
  const Category = sequelize.define(alias, cols, config);
  return Category;
}
