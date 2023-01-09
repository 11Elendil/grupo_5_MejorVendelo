module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        firstName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        typeId: dataTypes.BIGINT(10).UNSIGNED,
        email: {
            type: dataTypes.STRING(24),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(24),
            allowNull: true
        },
    };
    let config = {
        tableName: "Users",
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
 
    return User
};