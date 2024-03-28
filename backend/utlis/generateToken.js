import jwt from 'jsonwebtoken'

const generateToken = (userID) =>{
     return jwt.sign({userID}, process.env.JWT_KEY,{
          expiresIn: '30d'
     })
}

export  default generateToken