module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        avatar: {
            type: DataTypes.STRING(255)
        },
        newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(255),
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    };
    let config = {
        underscored: true,
        tablename: 'users',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
    let User = sequelize.define(
        alias,
        cols,
        config
    );
    User.associate = (model) => {
        User.belongsToMany(model.Game, {
            as: 'games',
            through: 'user_game',
            foreignKey: 'user_id',
            otherKey: 'game_id_user',
            timestamps: true
        });
    };
    return User;
};