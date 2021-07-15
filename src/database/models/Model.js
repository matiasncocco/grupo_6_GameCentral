// Voy a exportar mi modelo, con los parámetros (sequelize) y (DataTypes) <--- cuidado las mayúsculas;
module.exports = (sequelize, DataTypes) => {

    // defino el alias de mi modelo, tiene que ser igual que el archivo: SINGULAR y La Primera Mayúscula;
    let alias = 'Model';

    // defino las columnas de la tabla, me copio de lo que figura en el workbench
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        // si uso columnas 'crated_at' & 'updated_at', tengo que hacer timestamps = true en config;
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        // éstas llevan 'TIMESTAMP' en MySQL, y aquí usamos DataTypes.DATE;
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },
        // si uso la columna 'deleted_at', tengo que hacer paranoid = true en config;
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        // en éste caso y en otras columnas, mirad cómo el field: 'first_name' lo uso porque no quiero usar guiones bajos en mi configuración de sequelize, es buena práctica &usar camelCase y decirle a qué campo me estoy refiriendo;
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'last_name'
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
        },
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'release_date'
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        // el DataTypes.BOOLEAN representa el 'TINYINT' de MySQL;
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    };

    // hora de definir la configuración;
    let config = {
        // es buena práctica decirle el nombre de la tabla, ya que puede no coincidir 100% y nos ahorramos un dolor de cabeza;
        tablename: 'mysql_tablename',
        // si miramos arriba, tenemos tablas 'created_at' y 'updated_at', por eso timestamps = true;
        timestamps: true,
        // si miramos arriba, tenemos tabla 'deleted_at' por eso paranoid = true;
        paranoid: true,
        // otra definición para ahorrar dolor de cabeza: nos aseguramos de definir charset y collation para evitar cualquier problema;
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };

    // habiendo definido todo arriba, aquí decimos lo que lleva nuestro modelo, definiéndolo;
    let Model = sequelize.define(
        // agarrá el alias que te dije arriba;
        alias,
        // agarrá las columnas que te dije arriba;
        cols,
        // agarrá la config que te dije arriba;
        config
        );

    // en éste momento hay que decirle a sequelize las relaciones que tiene mi columna;
    Model.associate = (model) => {

        // EJEMPLO DE ASOCIACIÓN UNO A MUCHOS:
        // como ejemplo, UN PRODUCTO tiene UNA MARCA;
        Product.belongsTo(model.Brand, {
            // una marca, por eso va en singular;
            as: 'brand', // singular;
            // ésta columna está en mi tabla PRODUCTS como FK;
            foreignKey: 'brand_id'
        });
        // Luego, supongamos que estoy configurando mi modelo BRAND, haré lo siguiente:
        // UNA MARCA tiene MUCHOS PRODUCTOS;
        Brand.hasMany(model.Product, {
            // muchos productos, por eso va en plural;
            as: 'products', // plural;
            // ésta columna es la misma que aparece en la tabla PRODUCTS;
            foreignKey: 'brand_id'
        });

        // EJEMPLO DE ASOCIACIÓN MUCHOS A MUCHOS:
        // como ejemplo, veamos la lógica:
        // UNA PELÍCULA tiene MUCHOS ACTORES;
        // UN ACTOR actúa en MUCHAS PELÍCULAS;
        Movie.belongsToMany(model.Actor, {
            // muchos actores, por eso va plural;
            as: 'actors', // plural;
            // a través de, aquí va la tabla pivot;
            throuhg: 'actor_movie',
            // columna foreign key del modelo que estoy definiendo, en este caso "Movie";
            foreignKey: 'movie_id',
            // la otra foreign key que pertenece al modelo con el que estoy relacionando, en éste caso "Actor";
            otherKey: 'actor_id',
            // SI LA TABLA PIVOT TIENE COLUMNAS "created_at", "updated_at":
            timestamps: true // si no, por default es false así que no decimos nada;
            // si la tabla pivot tiene éstas columnas y decimos timestamps: true, tendremos que crear un modelo para la tabla pivot también, si no no es necesario;
        });

        // Parémonos un momento ahora en la definición del modelo "Actor" para terminar de entender éste ejemplo:
        // recordemos que:
        // UN ACTOR actúa en MUCHAS PELÍCULAS;
        // UNA PELÍCULA tiene MUCHOS ACTORES;
        Actor.belongsToMany(model.Movie, {
            // muchas peliculas, por eso va plural;
            as: 'movies', // plural;
            through: 'actor_movie',
            // veamos como "foreignKey" y "otherKey" están switcheadas en comparación con cuando definíamos el modelo "Movie";
            // primero va la llave del modelo que estoy definiendo, como "foreignKey" y luego en "otherKey", la llave del modelo con el que relaciono;
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: true
        });
    };
    // SOLO ME QUEDA HACER RETURN DE LO QUE DEFINÍ:
    return Model;
};