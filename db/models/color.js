'use strict';
module.exports = (sequelize, dataTypes) => {
  let alias = 'Colors';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
     name: {
          type: dataTypes.STRING,
          allowNull: false
      },
  };
  let config = {
      timestamps: false,
      tableName: "Colors"
  }
  const Colors = sequelize.define(alias, cols, config); 

  //Aquí van las asociaciones

  Colors.associate = function(models) {
    Colors.hasMany(models.Color, {
        foreignKey: "productId"
    });
};

  return Colors
};