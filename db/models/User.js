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
            type: dataTypes.STRING(24),
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
        timestamps: false,
        tableName: "users"
    }
    const User = sequelize.define(alias, cols, config); 

    //Aquí van las asociaciones

    User.associate = function(models){
        User.belongsTo(models.Type, {
            as: "types",
            foreignKey: "typeId"
        }),
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "userId"
        }),
        User.hasMany(models.products, {
            as:"Products",
            foreignKey:"sellerId"
        })
    }

    return User
};