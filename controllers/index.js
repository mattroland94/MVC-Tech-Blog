const router = require('express').Router();
const apiroutes = require('./api');
const homeroutes = require('./home-routes');
const dashboardroutes = require('./dashboard-routes');

router.use('/', homeroutes);
router.use('/api', apiroutes);
router.use('/dashboard', dashboardroutes);

module.exports = router;