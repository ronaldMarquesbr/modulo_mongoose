const Link = require('../models/Link');

const redirect = async (req, res) => {

    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title });
        res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }

}

const addLink = async (req, res) => {

    let link = new Link(req.body);

    try {

        let doc = await link.save();
        res.send(doc);

    } catch (error) {

        res.send(error);

    }

}

module.exports = { redirect, addLink };