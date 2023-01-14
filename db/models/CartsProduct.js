module.exports = (sequelize, dataTypes) => {
    let alias = 'CartsProduct';
    let cols = {
        idCart: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
         
        idProduct: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          allowNull: false
      },
        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cartsId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
    };
    let config = {
        timestamps: false,
        tableName: "CartsProduct"
    }
    const CartsProduct = sequelize.define(alias, cols, config); 
  
    //Aquí van las asociaciones
  
    CartsProduct.associate = function(models){
        CartsProduct.belongsTo(models.Products, {
            as: "Product",
            foreignKey: "idProduct"
        });
        CartsProduct.belongsTo(models.Carts, {
            as: "Cart",
            foreignKey: "cartsId"
        });
       
    }
    return CartsProduct;
  };
  
/*module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart_Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        id_cart: dataTypes.BIGINT(10).UNSIGNED,
        id_product: dataTypes.BIGINT(10).UNSIGNED,
        
        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
 
    return User
};*/