const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Background extends Model {}

Background.init(
  {
    background_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    background_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    background_lang: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "language",
        key: "id",
      },
    },
    background_tool: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "tool",
        key: "id",
      },
    },
    background_prof: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "skillprof",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = Background
