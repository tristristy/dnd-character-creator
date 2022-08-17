const router = require('express').Router();
const { Player } = require('../../models');

// get player data
router.get('/player', async (req, res) => {
    Player.findAll({
        attributes: ['id', 'user_name', 'user_id'], 
        include: [
            {
              model: Player,
              attributes: ['user_name']
            }
        ]
    })
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single player
router.get('/player/:id', async (req, res) => {
    Player.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'user_name', 'level', 'class_id', 'race_id', 'user_id'],
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
    await Player.create({
      user_name: req.body.user_name,
      level: req.body.level,
      class_id: req.body.class_id,
      race_id: req.body.race_id,
      user_id: req.body.user_id,
    })
      .then(dbPlayerData => res.json(dbPlayerData))
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