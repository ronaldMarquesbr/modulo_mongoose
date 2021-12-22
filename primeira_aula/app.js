const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// 1 maneira de se conectar no banco de dados
// mongoose.connect('mongodb://localhost:27017/blog', (error, db) => {

//     console.log(error);
//     console.log(db);

// });


// 2 maneira de se conectar ao banco de dados
// O mongoose traz muitas funcionalidades que se parecem com promises
// mongoose.connect('mongodb://localhost:27017/blog').then(db => {
//     console.log(db);
// }).catch(error => {
//     console.log(error);
// })


// 3 maneira de se conectar ao banco de dados

mongoose.connect('mongodb://localhost:27017/blog')
let db = mongoose.connection;

db.on('error', () => console.log('Houve um erro'));

db.once('open', () => console.log('Banco carregado'));

app.get('/', (req, res) => {

    res.send('Hello World');

})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

})