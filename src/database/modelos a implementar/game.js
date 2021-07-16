// correcciones:
// el archivo tiene que ser mayúscula y singular

module.exports = (sequelize ,dataTypes) => {

    let alias = "Game";

    // a partir de acá hay tabulaciones raras (indentaciones)
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
     img: {
         type: dataTypes.STRING
     },
    // pirce es DECIMAL y lleva unos números como parámetro
    // checkear la DB y la documentación de "sequelize"
    // https://sequelize.org/master/manual/model-basics.html#data-types
     price: {
         type: dataTypes.INTEGER,
         allowNull: false
     },
     disconunt: {
         type: dataTypes.INTEGER,
         allowNull: false
     },
    // description no es DataTypes.STRING, checkear la DB
      description: {
         type: DataTypes.STRING(500),
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
        tablename: 'games',
        // si usabamos 'created_at', 'updated_at', esto no va en false
        timestamps: false,
        // si usabamos 'deleted_at' esto no va en false
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };

    const Game = sequelize.define(alias, columns, config)

    // falta hacer las relaciones

    return Game;
 }

// faltaría hacer alguna prueba
// antes de probar, mover archivo a /models
// luego armar una ruta con un controlador