module.exports = (sequelize, dataTypes) => {
  let alias = 'SubCategory';
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
  };
  let config = {
      timestamps: false,
      tableName: "subcategories"
  }
  const SubCategory = sequelize.define(alias, cols, config);
  
  
  
  SubCategory.associate = function(models) {
    SubCategory.hasMany(models.Product, {
        foreignKey: "subCategoriesId"
    });
};
  return SubCategory;
}
