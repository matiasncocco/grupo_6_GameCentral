module.exports = (sequelize, DataTypes) => {
    let alias = 'StatusGame';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        gameId: {
            type: DataTypes.INTEGER,
            field: 'game_id_status'
        },
        statusId: {
            type: DataTypes.INTEGER,
            field: 'status_id'
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };
    let config = {
        define: {
            timestamps: false
        },
        underscored: true,
        tableName: 'status_game',
        timestamps: true,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        freezeTableName: true
    };
    let StatusGame = sequelize.define(
        alias,
        cols,
        config
    );
    StatusGame.associate = (model) => {
        StatusGame.belongsTo(model.Status, {
            foreignKey: 'status_id'
        });
        StatusGame.belongsTo(model.Game, {
            foreignKey: 'game_id_status'
        });
    };
    return StatusGame;
};