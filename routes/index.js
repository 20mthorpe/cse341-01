const router = require('express').Router();
const l01Controller = require('../controllers/lesson01');

router.get('/', l01Controller.maryRoute);
// routes.get('/jenny', l01Controller.jennyRoute);
// routes.get('/maria', l01Controller.mariaRoute);

router.use('/contacts', require('./contacts'));
router.use('/contacts/:id', require('./contacts'));

module.exports = router;