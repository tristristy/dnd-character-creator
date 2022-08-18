const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Player, User } = require('../models');

router.get('/', (req, res) => {res.render('index')});

router.get('/info', (req, res) => {res.render('info')});

router.get('/login', (req, res) => {res.render('login')});

router.get('/chara', (req, res) => {res.render('chara')});

router.get("/creator", (req, res) => {res.render("creator")});


// router.get('/:id', (req, res) => {
//   User.findOne({
//     attributes: { exclude: ['password'] },
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// const router = require('express').Router();
// const { Gallery, Painting } = require('../models');
// // Import the custom middleware
// const withAuth = require('../utils/auth');

// //redo routes to fit our design.

// // GET all galleries for homepage
// router.get('/creator', async (req, res) => {
//   try {
//     const dbPlayerData = await Player.findAll({
//       attributes: [
//         'id',
//         'user_name'
//       ],
//       include: [
//         {
//           model: User,
//           attributes: ['id'],
//         },
//       ],
//     });

//     const players = dbPlayerData.map((player) =>
//       player.get({ plain: true })
//     );

//     res.render('creator', {players});
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one gallery
// // Use the custom middleware before allowing the user to access the gallery
// router.get('/gallery/:id', withAuth, async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one painting
// // Use the custom middleware before allowing the user to access the painting
// router.get('/painting/:id', withAuth, async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
