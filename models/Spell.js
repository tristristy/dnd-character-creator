const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Spell extends Model {}

Spell.init(
  {
    spell_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    spell_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spell_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spell_type: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    casting_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spell_range: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    components: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    higher_levels: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "class",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "painting",
  }
);

module.exports = Spell;
