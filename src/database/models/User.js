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
        // createdAt: {
        //     types: DataTypes.DATE,
        //     field: 'created_at'
        // },
        // updatedAt: {
        //     types: DataTypes.DATE,
        //     field: 'updated_at'
        // },
        // deletedAt: {
        //     types: DataTypes.Date,
        //     field: 'deleted_at'
        // }
    };
    let config = {
        tablename: 'users',
        timestamps: false,
        paranoid: false,
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
    // User.associate = (model) => {
    //     User.belongsToMany(model.Game, {
    //         as: 'games',
    //         through: 'user_game',
    //         foreignKey: 'user_id',
    //         otherKey: 'game_id_user',
    //         timestamps: false
    //     });
    // };
    return User;
};