module.exports = (sequelize, dataTypes) => {

    let alias = 'User'; 

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(25), 
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50), 
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(200), 
            allowNull: false
        },
    };

    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const User = sequelize.define(alias,cols,config);

    return User
};