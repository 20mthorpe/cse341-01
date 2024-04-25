const routes = require('express').Router();
const l01Controller = require('../controllers/lesson01');

routes.get('/', l01Controller.maryRoute);
routes.get('/jenny', l01Controller.jennyRoute);

module.exports = routes;