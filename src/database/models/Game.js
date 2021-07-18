module.exports = (sequelize ,DataTypes) => {

    let alias = "Game";

    let columns = {
   
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(15,2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        },
        deleted_at: {
            type: DataTypes.DATE, 
        }
    };

    
   
    let config = {
        underscored: true,
        tablename: 'games',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };

    const Game = sequelize.define(alias, columns, config)
    Game.associate = (model) => {
        // un juego tiene muchas plataformas
        // una plataforma puede tener muchos juegos
        Game.belongsToMany(model.Platform, {
            as: 'platforms',
            through: 'platform_game',
            foreignKey: 'game_id_platform',
            otherKey: 'platform_id',
            timestamps: true
        });
        Game.belongsToMany(model.Status, {
            as: 'status',
            through: 'status_game',
            foreignKey: 'game_id_status',
            otherKey: 'status_id',
            timestamps: true
        });
        Game.belongsToMany(model.Category, {
            as: 'categories',
            through: 'category_game',
            foreignKey: 'game_id_category',
            otherKey: 'category_id',
            timestamps: true
        });
        Game.belongsToMany(model.User, {
            as: 'users',
            through: 'user_game',
            foreignKey: 'game_id_user',
            otherKey: 'user_id',
            timestamps: true
        });
    };

    return Game;
 }

// faltaría hacer alguna prueba
// antes de probar, mover archivo a /models
// luego armar una ruta con un controlador