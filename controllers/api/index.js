const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/players', playerRoutes);

module.exports = router;
