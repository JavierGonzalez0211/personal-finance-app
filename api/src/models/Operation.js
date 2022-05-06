const {DataTypes} = require('sequelize');

//Creating and defining the model
module.exports = (sequelize) => {
    sequelize.define('operation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        concept:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        op_type: {
            type: DataTypes.ENUM ('Inc', 'Exp'),
            allowNull: false,
        },
        amount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, 
    {timestamps: false}) 
}