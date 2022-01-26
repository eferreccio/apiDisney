module.exports = (sequelize, dataTypes) => {

    let alias = 'Character'; 

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING(25), 
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        age: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        weigth: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        history: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Character = sequelize.define(alias,cols,config);

    Character.associate = function (models) {
        Character.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en Movie.js
            as: "Movie",
            through: 'characters_has_movies',
            foreignKey: 'characters_id',
            otherKey: 'movies_id',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Character
};