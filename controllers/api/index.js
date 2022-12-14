const router = require('express').Router();

// const { route } = require('./api');

// const apiRoutes = require('./api');
const playerRoutes = require('./player-routes.js');
const userRoutes = require('./user-routes.js');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

router.use('/users', userRoutes);
router.use('/players', playerRoutes);

module.exports = router;