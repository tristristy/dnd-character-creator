const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AbilityScore extends model {}

AbilityScore.init({
  AS_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  AS_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  AS_Score: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "10",
    validate: {
      isNumeric: true
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

module.exports = AbilityScore;