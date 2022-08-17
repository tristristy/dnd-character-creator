const User = require('./User');
const Player = require('./Player');

User.hasMany(Player, {
  foreignKey: 'user_id'
});

Player.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = { User, Player};