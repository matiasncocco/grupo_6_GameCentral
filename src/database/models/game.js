// module.exports = (sequelize ,dataTypes) => {

//    let alias = "games";

//    let columns = {
   
//     id: {
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER.UNSIGNED,
//         allowNull: false
//     },
//     title: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//     },
//     img: {
//         type: dataTypes.STRING
//     },
//     price: {
//         type: dataTypes.INTEGER,
//         allowNull: false
//     },
//     disconunt: {
//         type: dataTypes.INTEGER,
//         allowNull: false
//     },
//      description: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//     },
//     createdAt: {
//         type: DataTypes.DATE,
//         field: 'created_at'
//     },
//     updatedAt: {
//         type: DataTypes.DATE,
//         field: 'updated_at'
//     },
//     deletedAt: {
//         type: DataTypes.DATE, 
//         field: 'deleted_at'
//     }
//    };

//    // CONFIGURACION -----------------------------------------------------------------------------------------------------------------
   
//    let config = {
//        timestamps: true
//    }

//    const user = sequelize.define(alias, columns, config)

//    return user;
// }



  
