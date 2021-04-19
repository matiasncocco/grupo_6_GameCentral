const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve('./public')
app.use(express.static(publicPath));

const indexPath = path.resolve('./views/index.html');
app.get('/', (req,res) => res.sendFile(indexPath));

app.listen(3001, () => console.log('Servidor corriendo en el puerto 3001'));