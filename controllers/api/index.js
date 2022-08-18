const router = require('express').Router();

// const { route } = require('./api');
<<<<<<< HEAD
=======

>>>>>>> cfc463782f0f67e93b3abb4f8259a410bbaf2be2
// const apiRoutes = require('./api');
const playerRoutes = require('./player-routes.js');
const userRoutes = require('./user-routes.js');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
<<<<<<< HEAD
=======

>>>>>>> cfc463782f0f67e93b3abb4f8259a410bbaf2be2
router.use('/users', userRoutes);
router.use('/players', playerRoutes);

module.exports = router;