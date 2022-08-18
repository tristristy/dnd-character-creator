const router = require('express').Router();

// const { route } = require('./api');
<<<<<<< HEAD
// const apiRoutes = require('./api');
const playerRoutes = require('./player-routes.js');
const userRoutes = require('./user-routes.js');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
=======
const userRoutes = require('./user-routes');
const playerRoutes = require('./player-routes');

>>>>>>> 0f8aa742ad9b053a008bfc872fbd05a5b0257f0f
router.use('/users', userRoutes);
router.use('/players', playerRoutes);

module.exports = router;