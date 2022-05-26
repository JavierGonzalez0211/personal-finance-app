const {DataTypes} = require('sequelize');

//Creating and defining the model
module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {msg:"must be a valid email address"}
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    }, 
    {timestamps: false}) 
}