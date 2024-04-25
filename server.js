// express web server

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Mary Thorpe');
});

const port = 3000;
app.listen(process.env.port || port);
console.log('Server running at port ' + port);