const express = require('express');
const app = express();
const path = require('path');

// public
const publicPath = path.resolve('./public')
app.use(express.static(publicPath));

// home
const indexPath = path.resolve('./views/index.html');
app.get('/', (req, res) => res.sendFile(indexPath));

// detalle de producto
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productDetail.html'));
});

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

app.listen(process.env.PORT || 3001, () => console.log('Servidor corriendo en el puerto 3001'));