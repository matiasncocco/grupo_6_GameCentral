const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/main');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

// public
const publicPath = path.resolve('./public');
app.use(express.static(publicPath));

// ejs
app.set('view engine','ejs');
let viewsPath = path.resolve('./src/views');
app.set('views', viewsPath);

// home
app.use('/', mainRouter);

// detalle de producto Hades y carrito
app.use('/', productRouter);

// registro y login
app.use('/', userRouter);

app.listen(3001, () => console.log('Servidor corriendo en el puerto 3001'));