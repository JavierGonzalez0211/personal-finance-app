const {User} = require ('../../db.js');
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
require('dotenv').config();
const {SECRET_KEY} = process.env



//-------Adding Users------------
const addUser = async (params) => {
    let {userName, email, password} = params;

    if (!password || password?.length < 6) {
        return "password is required and must have at least 6 characters"
    }

    let hashedPassword = await hashPassword(password)
   
    try {
         await User.create({
            user_name: userName,
                email,
                password: hashedPassword
               
        })

        return "user created successfully"
    } 
    catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            const message = (error.parent.detail).includes("email")
                            ? "email already exist"
                            : "user already exist"
                            
          return message
        }
        else if (error.name === "SequelizeValidationError") {
            
            return error.message
        }
        else {
            return error
        }
    }
}

//---------Login-----------------

const login = async (user, password) => {
    
    let userToVerify = await User.findOne ({
        where: {
            user_name: user
        }
    })

    if (userToVerify) {
        const hashedPassword = userToVerify.password
        const correctUser = verifyPassword (password, hashedPassword)
        
        if (correctUser) {
            let token = createToken(user)
            return token
        }
    }
    else {
        return false
    }
} 

//------hashing password----------
const hashPassword = async (password) => {
    
    const hashedPassword = await bcryptjs.hash(password,10)

    return hashedPassword
}

//---------verify password---------
const verifyPassword =  (password, hash) => {

    return bcryptjs.compareSync (password, hash)

}

//---------create Token
const createToken = (user) =>{

    let token = jwt.sign({user}, SECRET_KEY, { expiresIn: '2h' })

    if (token){
        return token
    }
    else {
        return false
    }
}

//-------verify token
const verifyAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (token === undefined) {
        return res.sendStatus(403);
    }
  
    jwt.verify(token, SECRET_KEY, (error, decoded) => {
      if (error) {
        res.sendStatus(403);
      }else {
       next()
      }
    })
  }

module.exports = {
    addUser,
    login,
    verifyAuth
}