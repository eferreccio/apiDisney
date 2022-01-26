module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        image: {
            type: dataTypes.STRING(25),
            allowNull: false
        },
        title: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        created_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        rating: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        genre_id: dataTypes.BIGINT(10)
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, { // models.Genre -> Genres es el valor de alias en Genre.js
            as: "genre",
            foreignKey: "genre_id"
        })

        Movie.belongsToMany(models.Character, { // models.Character -> Character es el valor de alias en Character.js
            as: "Character",
            through: 'characters_has_movies',
            foreignKey: 'movies_id',
            foreignKeyConstraint: true,
            otherKey: 'characters_id',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Movie
};