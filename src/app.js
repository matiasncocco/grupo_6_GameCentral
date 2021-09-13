let express = require('express');
let app = express();
let path = require('path');
let cors = require('cors');

// public y views path
let publicPath = path.resolve('./public');
let viewsPath = path.resolve('./src/views');

// set views
app.set('view engine','ejs');
app.set('views', viewsPath);

// set PUT & DELETE, session & cookies
let methodOverride = require('method-override');
let session = require('express-session');
let cookies = require('cookie-parser');

// middlewares para: 
// public, req.body, PUT & DELETE, session & cookies, cors
app.use(express.static(publicPath));
app.use(express.urlencoded ({ extended:false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'session-secret',
    resave: false,
    saveUninitialized: true
}));
app.use(cookies());
app.use(cors());

// middleware global p/ etiquetas HTML
let userAppMiddleware = require('./middlewares/userAppMiddleware');

app.use(userAppMiddleware);

// requiero ruteos
let mainRouter = require('./routes/main');
let productsRouter = require('./routes/products');
let usersRouter = require('./routes/users');

// middlewares de rutas
app.use(
    '/',
    mainRouter
);
app.use(
    '/products',
    productsRouter
);
app.use(
    '/users',
    usersRouter
);

// requiero ruteos para API REST
let apiMainRouter = require('./routes/api/main');
let apiUsersRouter = require('./routes/api/users');
let apiProductsRouter = require('./routes/api/products');

// middlewares de rutas API REST
app.use(
    '/api',
    apiMainRouter
);
app.use(
    '/api/users',
    apiUsersRouter
);
app.use(
    '/api/products',
    apiProductsRouter
);

// middleware error 404 not found handling
app.use((req, res, next) => {
    res.status(404).render('error', {
        status: 404,
        title: 'ERROR',
        errorDetail: 'Page Not Found'
    });
    next();
});

// levanto el server
let port = process.env.PORT || 3001;
app.listen(
    port, () => console.log(`Servidor corriendo en el puerto ${port}`)
);