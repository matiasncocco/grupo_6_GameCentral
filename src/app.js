let express = require('express');
let app = express();
let path = require('path');

let publicPath = path.resolve('./public');
let viewsPath = path.resolve('./src/views');

app.set('view engine','ejs');
app.set('views', viewsPath);

let methodOverride = require('method-override');
let session = require('express-session');
let cookies = require('cookie-parser');

app.use(express.static(publicPath));
app.use(express.urlencoded ({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'session-secret',
    resave: false,
    saveUninitialized: true
}));
app.use(cookies());

let userAppMiddleware = require('./middlewares/userAppMiddleware');

app.use(userAppMiddleware);

let mainRouter = require('./routes/main');
let productsRouter = require('./routes/products');
let usersRouter = require('./routes/users');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.use((req,res,next) => {
    res.status(404).render('error', {
        status: 404,
        title: 'ERROR',
        errorDetail: 'Page Not Found'
    });
    next();
});

app.listen(process.env.PORT || 3001, () => console.log('Servidor corriendo en el puerto 3001'));