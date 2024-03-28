import express from 'express'
import expressHandler from 'express-async-handler'
import Portfolio from '../model/portfoliosModel.js'

const router = express.Router()

// get portfolio

router.get('/', expressHandler(async(req,res) =>{
     try {
       const user = await Portfolio.find()
       res.status(200).json(user)  
     } catch (error) {
        throw new Error('Somthing Went Wrong!')
     }
    
}))


// create portfolio

router.post('/', expressHandler(async(req,res) =>{
     const {title,image,category} = req.body
     
     
        const userExsist = await Portfolio.findOne({image})
        if(userExsist){
            throw new Error('Portfolio is Elready Exsist') 
        }
        const user = await Portfolio.create({
            title,
            image,
            category
        })

        const users = await user.save()
         if(users){
            res.status(200).json({
                _id:users._id,
                title:users.title,
                image:users.image,
                category:users.category,
            })
         }else{

             throw new Error('Please Fill Your Portfolio') 
         }
    
    
     
      
    
}))

export default router