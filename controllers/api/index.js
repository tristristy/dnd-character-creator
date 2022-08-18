const router = require('express').Router();

// const { route } = require('./api');
const userRoutes = require('./user-routes');
const playerRoutes = require('./player-routes');

router.use('/users', userRoutes);
router.use('/players', playerRoutes);

module.exports = router;