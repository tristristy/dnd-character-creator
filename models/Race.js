const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Race extends Model {}

Race.init(
  {
    race_id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    race_name: {
      type: DataType.STRING,
      allowNull: false,
    },
    race_language: {
      type: DataType.STRING,
      allowNull: false,
      references: {
        model: "language",
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
