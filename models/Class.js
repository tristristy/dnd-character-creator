const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Class extends Model {}

Class.init({
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  class_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hit_dice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  features: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

model.exports = Class;