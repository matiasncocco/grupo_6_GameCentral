module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';

    let cols = {
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
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
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
    };

    let Category = sequelize.define(
        alias,
        cols,
        config
    );

    Category.associate = (model) => {
        Category.belongsToMany(model.Game, {
            as: 'games',
            through: 'category_game',
            foreignKey: 'category_id',
            otherKey: 'game_id_category',
            timestamps: true
        });
    };

    return Category
};