module.exports = (sequelize, dataTypes) => {
    let alias = 'Type';
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
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Type = sequelize.define(alias, cols, config); 

    //Aquí van las asociaciones

    Type.associate = function(models){
        Type.hasMany(models.User, {
            as: "users",
            foreignKey: "typeId"
        })
    }
 
    return Type
};