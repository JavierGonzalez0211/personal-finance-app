require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const modelCategory = require('./models/Category.js');
const modelOperation = require('./models/Operation');
const modelUser = require('./models/User');
const {
    DB_USER, DB_PASSWORD, DB_HOST,PORT, DB_NAME
  } = process.env;



// Connection URI
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

sequelize.authenticate().then(()=>{
    console.log('connection to DB with success')
  }).catch(e=>{
    console.log('error during DB connection: ', e)});
    

modelCategory(sequelize);
modelOperation(sequelize);
modelUser(sequelize);

//Capitalizing model's name
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Category, Operation, User } = sequelize.models;


// Associations
Category.hasMany(Operation);
Operation.belongsTo(Category);

User.hasMany(Operation);
Operation.belongsTo(User);



module.exports = {
  ...sequelize.models,
  conn: sequelize,
  Op
}