module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
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
        tablename: 'categories',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    }
    const Category = sequelize.define(
        alias,
        columns,
        config
    );
    Category.associate = (model) => {
        // un juego tiene muchas categorías
        // una categoría puede tener muchos juegos
        Category.belongsToMany(model.Game, {
            as: 'games',
            through: 'category_game',
            foreignKey: 'category_id',
            otherKey: 'game_id_category',
            timestamps: true
        });
    };
    return Category;
}