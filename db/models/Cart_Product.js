module.exports = (sequelize, dataTypes) => {
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
};