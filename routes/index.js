const routes = require('express').Router();
const l01Controller = require('../controllers/lesson01');

routes.get('/', l01Controller.maryRoute);
// routes.get('/jenny', l01Controller.jennyRoute);
// routes.get('/maria', l01Controller.mariaRoute);

routes.get('/contacts', require('./contacts'));
routes.get('/contacts/:id', require('./contacts'));

module.exports = routes;