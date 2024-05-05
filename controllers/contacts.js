const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const getContacts = async (req, res, next) => {
    try {

        const db = await mongodb.getDb();
        const result = await db.db().collection('contacts').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
            
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching contacts');
    }
}

const getContact = async (req, res, next) => {
    try {
        console.log(req.params.id)
        const userId = new ObjectId(req.params.id);
        const db = await mongodb.getDb();
        const result = await db.db().collection('contacts').findOne({ _id: userId });
        
        if(!result){
            return res.status(404).send('Contact not found');
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);

    } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching contact');
    }
};

  module.exports = { getContacts, getContact };