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
            createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
            updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },
            deletedAt: {
            type: DataTypes.DATE, 
            field: 'deleted_at'
        }
    };
    let config = {
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
        // Category.belongsToMany(model.Game, {
        //     as: 'games',
        //     through: 'category_game',
        //     foreignKey: 'category_id',
        //     otherKey: 'game_id_category',
        // });
    };
    return Category;
}