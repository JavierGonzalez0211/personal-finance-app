const {DataTypes} = require('sequelize');

//Creating and defining the model
module.exports = (sequelize) => {
    sequelize.define('category', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        op_type: {
            type: DataTypes.ENUM ('Inc', 'Exp'),
            allowNull: false,
        },
    }, 
    {timestamps: false}) 
}