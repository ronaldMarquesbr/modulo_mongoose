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

const linkModel = mongoose.model('Link', linkSchema);


mongoose.connect('mongodb://localhost:27017/blog')
let db = mongoose.connection;

db.on('error', () => console.log('Houve um erro'));

db.once('open', () => {
    
    console.log('Banco carregado');

    app.get('/:title', async (req, res) => {

        let title = req.params.title;


        try {
            let doc = await linkModel.findOne({ title });
            res.redirect(doc.url);
        } catch (error) {
            res.send(error);
        }

    })

});

app.get('/', (req, res) => {

    res.send('Hello World');

})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

})