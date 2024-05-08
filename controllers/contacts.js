const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;
const Contact = require('../models/contacts');
const { post } = require('../routes');

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
        const contact = new Contact({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            favoritecolor: req.body.favoritecolor,
            birthday: req.body.birthday
        });
        const result = await contact.save()
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating contact');
    }
}

// Update a contact
const updateContact = async (req, res, next) => {
    try {
        const updatedContact = await Contact.updateOne({ _id: userId }, { $set: req.body });
        res.json(updatedContact);
        res.status(200).send('Contact updated');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating contact');
    }
}

// Delete a contact
const deleteContact = async (req, res, next) => {
    try {
        const deletedContact = await Contact.remove({ _id: req.params.id });
        res.json(deletedContact);
        res.status(200).send('Contact deleted');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting contact');
    }
}


  module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };