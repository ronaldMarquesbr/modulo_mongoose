const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');


const linkSchema = new mongoose.Schema({

    title: {type: String, required: true},
    description: String,
    url: {type: String, required: true},
    click: {type: Number, default: 0}

});
// se não passar nada para o campo click, o valor atribuído será igual ao valor passado como default
// portanto na hora de criar a variável link, logo abaixo, não precisamos passar o valor do link

const linkModel = mongoose.model('Link', linkSchema);
// o primeiro parâmetro é o nome do model e o segundo indica o schema
// está dizendo que vamos criar uma coleção onde todos os documentos seguirão o molde do schema

// a coleção 'links' será criada porque o mongoose se baseia no nome do model para criar o nome da coleção

let link = new linkModel({

    title:'ProgBr',
    description: 'Link para o twitter',
    url: 'https://twitter.com/progrbr',
    // click: 0

})


mongoose.connect('mongodb://localhost:27017/blog');

let db = mongoose.connection;

db.on('error', () => console.log('Houve um erro'));

db.once('open', () => {

    console.log('Banco carregado');

    link.save().then(doc => {
        console.log(doc);
    }).catch(err => {
        console.log(err);
    });
    
});


app.get('/', (req, res) => {

    res.send('Hello World');

})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

})