const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Player extends Model {}

Player.init (
    {
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        class_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        race_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        background: {
            type: DataTypes.STRING,
            allowNull: true
        },
        subclass: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tools: {
            type: DataTypes.STRING,
            allowNull: true
        },
        prof: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: true
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
    underscored: true,
    modelName: 'player',
  }
)

module.exports = Player