const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SkillProf extends Model {}

SkillProf.init(
  {
    skillprof_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skillprof_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AS_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'abilityScore',
        key: 'id',
      }
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id',
      }
    },
    background_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'background',
        key: 'id',
      }

    }


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = SkillProf
