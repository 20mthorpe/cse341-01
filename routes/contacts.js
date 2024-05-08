const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
//const Contact = require('../models/contacts');

router.get('/', contactsController.getContacts);
router.get('/:id', contactsController.getContact);

// I need a post route that will create a new contact. all the fields are required. (firstname, lastname, email, favoritecolor, birthday)
router.post('/', contactsController.createContact);

// I need a put route to update a contact
router.put('/:id', contactsController.updateContact);

// I need a delete route to delete a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;