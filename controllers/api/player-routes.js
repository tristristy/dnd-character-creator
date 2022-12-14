const router = require('express').Router();
const { Player } = require('../../models');
// const { createNewPlayer } = require("../../assets/script/creatorButtons")

// get player data
router.get('/creator', (req, res) => {
  Player.findAll({        
    attributes: [
    'player_id',
    'user_name',
  ]}).then((dbplayerData) => {
    res.json(dbplayerData);
  })
});

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbPlayerData = await Player.findAll({
      include: [
        {
          attributes: ['user_name', 'level']
        },
      ],
    });

    const players = dbPlayerData.map((player) =>
      player.get({ plain: true })
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get single player
router.get('/player/:id', async (req, res) => {
    Player.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'user_name', 'level', 'background', 'race_id', 'class_id', 'subclass', 'playerProf', 'playerSkill', 'playerTools', 'user_id'],
      include: [
        {
          model: Player,
          attributes: ['user_name']
        }
      ]
    }).then(dbPlayerData => {
        if (!dbPlayerData) {
          res.status(404).json({ message: 'No player found with this id' });
          return;
        }
        res.json(dbPlayerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// create player
router.post('/player', (req, res) => {
    console.log(req.body)
    Player.create({
      user_name: req.body.playerName,
      level: req.body.playerLevel,
      class_id: req.body.playerClass,
      race_id: req.body.playerRace,
      // user_id: req.body.user_id,
      background: req.body.playerBackground,
      subclass: req.body.playerSubclass,
      tools: req.body.playerTools,
      prof: req.body.playerProf,
      skills: req.body.playerSkills


    })
      .then(dbPlayerData => 
        {
          console.log(dbPlayerData);
          res.json(dbPlayerData)
        }
        )
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// put

// delete
router.delete('/player/:id', (req, res) => {
    Player.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPlayerData => {
        if (!dbPlayerData) {
          res.status(404).json({ message: 'No player found with this id' });
          return;
        }
        res.json(dbPlayerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;