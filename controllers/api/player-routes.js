const router = require('express').Router();
const { Player } = require('../../models');
// const { createNewPlayer } = require("../../assets/script/creatorButtons")

// get player data
router.get('/', (req, res) => {
  Player.findAll().then((playerData) => {
    res.json(playerData);
  })
});

// get single player
router.get('/:player_id', async (req, res) => {
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
router.post('/', (req, res) => {
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

// delete
router.delete('/:player_id', (req, res) => {
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