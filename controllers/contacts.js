const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;
//const Contact = require('../models/contacts');
const dbtest = require('../models/index');
const Contact = dbtest.contacts

// Get all contacts
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

// Get a contact
const getContact = async (req, res, next) => {
    try {
        //console.log(req.params.id)
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

// Create a contact
const createContact = async (req, res, next) => {
    try {
        const db = await mongodb.getDb();
        // const contact = new Contact({
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     email: req.body.email,
        //     favoriteColor: req.body.favoriteColor,
        //     birthday: req.body.birthday
        // });
        // //const result = await 
        // contact.save(contact).then((data)=>{
        //     res.send(data);
        // })
        const result = await db.db().collection('contacts').insertOne(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating contact');
    }
}

// Update a contact
// const updateContact = async (req, res, next) => {
//     try {
//         const updatedContact = await Contact.updateOne({ _id: userId }, { $set: req.body });
//         res.json(updatedContact);
//         res.status(200).send('Contact updated');
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error updating contact');
//     }
// }

const updateContact = async (req, res, next) => {
    try {
        const db = await mongodb.getDb();
        const userId = new ObjectId(req.params.id);
        const result = await db.db().collection('contacts').replaceOne({ _id: userId }, req.body);
        res.status(204).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating contact');
    }
}


// Delete a contact
const deleteContact = async (req, res, next) => {
    try {
        const db = await mongodb.getDb();
        const userId = new ObjectId(req.params.id);
        const deletedContact = await db.db().collection('contacts').deleteOne({ _id: userId });
        //res.json(deletedContact);
        if(deletedContact.deletedCount > 0){
            res.status(200).send();
        } else {
            res.status(500).send('Contact not found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting contact');
    }
}


  module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };