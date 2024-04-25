// express web server

const express = require('express');
const app = express();
const l01Controller = require('./controllers/lesson01');

app.get('/', l01Controller.maryRoute);
app.get('/jenny', l01Controller.jennyRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Server running at port ' + port);