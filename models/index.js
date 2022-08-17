const User = require('./User');
const Spell = require('./Spell');
const Player = require('./Player');
const Background = require('./Background');
const SkillProf = require('./SkillProf');
const Race = require('./Tools');
const Class = require('./Class');
const Language = require('./Language');
const Tool = require('./Tools')

User.hasMany(Player, {
  foreignKey: 'user_id'
});

Player.belongsTo(User, {
  foreignKey: "user_id"
});

Player.hasOne(Race, {
  foreignKey: "race_id"
});

Player.hasOne(Class, {
  foreignKey: "class_id"
});

Class.hasMany(Spell, {
  foreignKey: "class_id"
});

Background.hasMany(Language, {
  foreignKey: "background_lang"
});

Background.hasMany(Tool, {
  foreignKey: "background_tool"
});

Background.hasMany(SkillProf,{
  foreignKey: "background_prof"
});

Race.hasMany(Language, {
  foreignKey: "race_id"
})


module.exports = { User, Player, Race, Language, Tool, Class, Spell, Background};
