const express = require('express')

const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));

const authRoutes = require('./src/routes/authRoutes');

app.use('/', authRoutes);

app.use(express.static('public'));

app.listen(3000, () =>{
    console.log('Servidor rodando http://localhost:3000');
});