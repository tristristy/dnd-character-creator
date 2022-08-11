const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Race extends Model {}

Race.init( 
    {
        id: {
            type: DataType.INTEGER,
            
        }
    }
)
