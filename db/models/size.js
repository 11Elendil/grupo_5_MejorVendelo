module.exports = (sequelize, dataTypes) => {
  let alias = 'Size';
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
      tableName: "sizes"
  }
  const Size = sequelize.define(alias, cols, config);
  return Size;
}
