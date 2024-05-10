const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
//const Contact = require('../models/contacts');

router.get('/', contactsController.getContacts);
router.get('/:id', contactsController.getContact);

// create a new contact. all the fields are required. (firstname, lastname, email, favoritecolor, birthday)
router.post('/', contactsController.createContact);

// update a contact
router.put('/:id', contactsController.updateContact);

//  delete a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;