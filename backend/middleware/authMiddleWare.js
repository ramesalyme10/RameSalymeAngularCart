import jwt from 'jsonwebtoken'
import expressHandler from 'express-async-handler'
import Users from '../model/usersModel.js';

const protect = expressHandler(async(req,res,next) =>{
     let token;

     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1]

         try {
            let detcted = jwt.verify(token, process.env.JWT_KEY) 
            req.user = await Users.findById(detcted.userID)
            next()
         } catch (error) {
            res.status(401)
            throw new Error('No Authorized & No Invalid')
         }
     }

     if(!token){
        res.status(401)
        throw new Error('No Authorized & No token')
     }
})


export {protect}