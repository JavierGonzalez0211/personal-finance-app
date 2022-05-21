const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require ('cors')
const jwt = require ('jsonwebtoken');
require('dotenv').config();
const {SECRET_KEY} = process.env

//Server Configuration

require('./db.js');

const server = express();

//----------uncooment the following lines if you want to protect the endPoints withs CORS-------
// configuring cors
const whiteList = ['http://localhost:3000', "http://192.168.0.38:3000"]
const corsOptions = {
  origin: (origin, callback) => {
    const exist = whiteList.some(domain => domain === origin);
    if (exist){
      callback (null, true)
    }else{
      callback(new Error('Error: blocked by CORS'))
    }
  }
}

server.use(cors(corsOptions))



server.name = 'API';
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000' ); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Authentication first approuch ...working

const verifyAuth = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  let token;

  if (typeof bearerHeader !== "undefined") {
    token = bearerHeader.split(" ")[1]
        
  }
  else {
    res.sendStatus(403);
  }

  jwt.verify(token, SECRET_KEY, (error, user) => {
    if (error) {
      res.sendStatus(403);
    }else {
     next()
    }
  })
}

// server.post('/api/login', (req,res) =>{
  


  // jwt.sign({user}, SECRET_KEY, (error, token) =>{
    
  //   if (token){
  //     res.json({token})

  //   } else {
  //     res.json(error)
  //   }
  // })

// })
// server.post('/api/test_login', verifyAuth, (req,res) =>{
  

//   res.json({message:'authenticated'})
// })

server.use('/', routes);

module.exports = server;
