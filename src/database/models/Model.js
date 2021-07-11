module.exports = (sequelize, DataTypes) => {
    let alias = 'Model';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },
        deletedAt: {
            type: DataTypes.DATE, // only if paranoid = true;
            field: 'deleted_at'
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'last_name'
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
        },
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'release_date'
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    };
    let config = {
        tablename: 'mysql_tablename',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
    let Model = sequelize.define(
        alias,
        cols,
        config
        );
    Model.associate = (model) => {
        // each of Product has one Brand
        Product.belongsTo(model.Brand, {
            as: 'brand', // singular
            foreignKey: 'brand_id' // this ID exists in one of the tables
        });
        // each Brand has many Product
        Brand.hasMany(model.Product, {
            as: 'products', // plural
            foreignKey: 'brand_id' // this ID exists in one of the tables
        });
        // each movie has many actors
        // and each actor has acted in many movies
        Movie.belongsToMany(model.Actor, {
            as: 'actors',
            throuhg: 'actor_movie',
            foreignKey: 'movie_id', // se how this is one
            otherKey: 'actor_id', // and this one are switched in next example
            timestamps: true // actor_movie table has timestamps
            // if timestams are "true", it's a must to create a model for the pivot table
        });
        // each actor has acted in many movies
        // and each movie has many actors
        Actor.belongsToMany(model.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: true
        });
    };
    return Model;
};