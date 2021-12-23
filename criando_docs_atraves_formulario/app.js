const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const linkRoute = require('./routes/linkRoutes');


mongoose.connect('mongodb://localhost:27017/blog');
let db = mongoose.connection;

db.on('error', () => console.log('Houve um erro'));
db.once('open', () => console.log('Banco carregado'));


app.use('/', linkRoute);


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

})