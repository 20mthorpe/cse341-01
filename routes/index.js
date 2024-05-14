const router = require('express').Router();
const l01Controller = require('../controllers/lesson01');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/', require('./contacts'));
// routes.get('/jenny', l01Controller.jennyRoute);
// routes.get('/maria', l01Controller.mariaRoute);

//router.use('/contacts', require('./contacts'));
//router.use('/contacts/:id', require('./contacts'));

module.exports = router;