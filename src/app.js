let express = require('express');
let app = express();
let path = require('path');

let publicPath = path.resolve('./public');
app.use(express.static(publicPath));

app.set('view engine','ejs');
let viewsPath = path.resolve('./src/views');
app.set('views', viewsPath);

app.use(express.urlencoded ({extended:false}));
app.use(express.json());

let mainRouter = require('./routes/main');
let productRouter = require('./routes/product');
let userRouter = require('./routes/user');

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);


app.listen(process.env.PORT || 3001, () => console.log('Servidor corriendo en el puerto 3001'));