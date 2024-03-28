import express from 'express'
import expressHandler from 'express-async-handler'
import Users from '../model/usersModel.js'
import generateToken from '../utlis/generateToken.js'
import bcryptjs from 'bcryptjs'
import { protect } from '../middleware/authMiddleWare.js'
const router = express.Router()


// get users

router.post('/user', expressHandler(async(req,res) =>{
     
    const {email,password} = req.body
    const users = await Users.findOne({email})
    const comparePassword = await bcryptjs.compare(password,users.password)
    if(users && comparePassword){
        res.status(200).json({
            _id:users._id,
            name:users.name,
            email:users.email,
            token:generateToken(users._id)
        })
    }else{
        throw new Error('Invalid No email No Password')
    }
}))


// create users

router.post('/', expressHandler(async(req,res) =>{
     
    const {name,email,password,confirmPassword} = req.body

     const  usersExsist = await Users.findOne({email})
     if(usersExsist){
        throw new Error(' Users Elready Exsist')
     }

    if(!name && !email && !password && !confirmPassword){
        throw new Error(' Please Fill your Users')
    }else{
         const hash = await bcryptjs.genSalt(10)
         const saltPassword = await bcryptjs.hash(password,hash)
        const users = await Users.create({
            name,
            email,
            password:saltPassword,
            confirmPassword
        })

        const user = await users.save()

         if(user){
             res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password,
                confirmPassword:user.confirmPassword,
                token:generateToken(user._id)
             })
         }
    }


}))


export default router