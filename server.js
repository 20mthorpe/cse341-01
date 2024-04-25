// express web server
const express = require('express');
const app = express();

const port = 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Server running at port ' + port);