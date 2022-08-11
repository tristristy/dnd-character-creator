const { Model, DataTypes } = require("sequelize");
const { model } = require("../config/connection");
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        class_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "class",
                key: "id"
            }
        },
        race_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "race",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
)

module.exports = Player