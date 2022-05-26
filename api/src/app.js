const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
// const cors = require ('cors')
const jwt = require ('jsonwebtoken');
require('dotenv').config();
const {SECRET_KEY} = process.env

//Server Configuration

require('./db.js');

const server = express();

//----------uncooment the following lines if you want to protect the endPoints withs CORS-------
// configuring cors
// const whiteList = ['http://localhost:3000', "http://192.168.0.38:3000"]
// const corsOptions = {
//   origin: (origin, callback) => {
//     const exist = whiteList.some(domain => domain === origin);
//     console.log('ORIGIN', origin)
//     if (exist){
//       callback (null, true)
//     }else{
//       callback(new Error('Error: blocked by CORS'))
//     }
//   }
// }

// server.use(cors(corsOptions))



server.name = 'API';
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000' ); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});




server.use('/', routes);

module.exports = server;
