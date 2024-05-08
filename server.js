// express web server
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');

const app = express();
const port = process.env.PORT || 8080;

const contactsRoutes = require('./routes/contacts');

// middleware
app.use('/contacts', contactsRoutes);

app.use(bodyParser.json());
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/', require('./routes'));

mongodb.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Server running at port ' + port);
    }
});