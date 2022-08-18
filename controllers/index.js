const router = require('express').Router();

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/users', userRoutes);

const { route } = require('./api');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
