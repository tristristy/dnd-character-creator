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

// get single player
router.get('/creator/:player_id', async (req, res) => {
    Player.findOne({
      where: {
        player_id: req.params.player_id
      }
    }).then(dbPlayerData => {
        res.json(dbPlayerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// create player
router.post('creator/', (req, res) => {
    Player.create({
      user_name: req.body.user_name,
      level: req.body.level,
      class_id: req.body.class_id,
      race_id: req.body.race_id,
      user_id: req.body.user_id,
    })
      .then(dbPlayerData => {
        res.json(dbPlayerData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// update player
router.put('/creator/:id', (req, res) => {
  Player.update(req.body, {
    individualHooks: true,
    where: {
      player_id: req.params.id
    }
  })
    .then(dbUserData => {
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete
router.delete('creator/:player_id', (req, res) => {
    Player.destroy({
      where: {
        player_id: req.params.player_id
      }
    })
      .then(dbPlayerData => {
        res.json(dbPlayerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;