const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tools extends Model {}

Tools.init(
  {
    tool_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tool_name: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = Tools;
