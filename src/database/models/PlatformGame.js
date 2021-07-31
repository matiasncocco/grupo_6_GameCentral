module.exports = (sequelize, DataTypes) => {
    let alias = 'PlatformGame';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        gameId: {
            type: DataTypes.INTEGER,
            field: 'game_id_platform'
        },
        platformId: {
            type: DataTypes.INTEGER,
            field: 'platform_id'
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };
    let config = {
        underscored: true,
        tableName: 'platform_game',
        timestamps: true,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        freezeTableName: true
    };
    let PlatformGame = sequelize.define(
        alias,
        cols,
        config
    );
    PlatformGame.associate = (model) => {
        PlatformGame.belongsTo(model.Platform, {
            foreignKey: 'platform_id'
        });
        PlatformGame.belongsTo(model.Game, {
            foreignKey: 'game_id_platform'
        });
    };
    return PlatformGame;
};