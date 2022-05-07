const {User} = require ('../../db.js');
const bcryptjs = require ('bcryptjs');


//------hashing password----------
const hashPassword = async (password) => {
    const hashedPassword = await bcryptjs.hash(password,10)

    return hashedPassword
}

//-------Adding Users------------
const addUser = async (params) => {
    let {userName, email, password} = params;

    if (password.length < 6) {
        return "password must have at least 6 characters"
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
          return  "user or email already exist" 
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



module.exports = {
    addUser,
}