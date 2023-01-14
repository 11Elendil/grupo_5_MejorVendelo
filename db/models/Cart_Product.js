module.exports = (sequelize, dataTypes) => {
    let alias = 'CartProduct';
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
        tableName: "CartProduct"
    }
    const CartProduct = sequelize.define(alias, cols, config); 
  
    //Aquí van las asociaciones
  
    CartProduct.associate = function(models){
        CartProduct.belongsTo(models.Products, {
            as: "Product",
            foreignKey: "productId"
        });
        CartProduct.belongsTo(models.Cart, {
            as: "Cart",
            foreignKey: "cartId"
        });
    }
    return CartProduct;
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