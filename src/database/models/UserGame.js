module.exports = (sequelize, DataTypes) => {
    let alias = 'UserGame';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        gameId: {
            type: DataTypes.INTEGER,
            field: 'game_id_user'
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        }
    };
    let config = {
        underscored: true,
        tableName: 'user_game',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        },
        freezeTableName: true
    }
    let UserGame = sequelize.define(
        alias,
        cols,
        config
    );
    UserGame.associate = (model) => {
        UserGame.belongsTo(model.User, {
            foreignKey: 'user_id'
        });
        UserGame.belongsTo(model.Game, {
            foreignKey: 'game_id_user'
        });
    };
    return UserGame;
}