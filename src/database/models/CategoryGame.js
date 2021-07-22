module.exports = (sequelize, DataTypes) => {
    let alias = 'CategoryGame';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        gameId: {
            type: DataTypes.INTEGER,
            field: 'game_id_category'
        },
        categoryId: {
            type: DataTypes.INTEGER,
            field: 'category_id'
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    };
    let config = {
        underscored: true,
        tableName: 'category_game',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        freezeTableName: true
    };
    let CategoryGame = sequelize.define(
        alias,
        cols,
        config
    );
    CategoryGame.associate = (model) => {
        CategoryGame.belongsTo(model.Category, {
            foreignKey: 'category_id'
        });
        CategoryGame.belongsTo(model.Game, {
            foreignKey: 'game_id_category'
        });
    };
    return CategoryGame;
};