const express = require('express');
const app = express();
const path = require('path');
const productController = require('./controllers/productController');
const mainRouter = require('./routes/main')
const productRouter = require('./routes/product')

// public
const publicPath = path.resolve('./public')
app.use(express.static(publicPath));

// ejs
app.set('view engine','ejs');
let viewsPath = path.resolve ('./src/views');
app.set('views', viewsPath);


// home
app.use('/', mainRouter);

// detalle de producto Hades
app.use('/product', productRouter);

// registro
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

// login
const loginPath = path.resolve('./views/login.html');
app.get('/login', (req,res) => res.sendFile(loginPath));

// carrito de compras
const cartPath = path.resolve('./views/shopping-cart.html');
app.get('/carrito', (req,res) => res.sendFile(cartPath));

app.listen(3001, () => console.log('Servidor corriendo en el puerto 3001'));