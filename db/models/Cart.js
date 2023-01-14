module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
          totalPrice: {
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
        totalAmount: {
          type: dataTypes.INTEGER.UNSIGNED,
          allowNull: false
      },
     
    };
    let config = {
        timestamps: false,
        tableName: "Cart"
    }
    const Cart = sequelize.define(alias, cols, config); 
  
    //Aquí van las asociaciones
  
    Cart.associate = function(models){
        Cart.hasMany(models.Products, {
            as: "Product",
            foreignKey: "idCategories"
        });
        /*Cart.belongsTo(models.Users, {
            as: "User",
            foreignKey: "userId"
        });*/
    }
    return Cart;
  };
  


/*module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        id_user: dataTypes.BIGINT(10).UNSIGNED,

        total_price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        total_amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Cart = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
 
    return Cart
};*/