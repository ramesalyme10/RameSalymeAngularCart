import mongoose from "mongoose";

const portfolioSchema = mongoose.Schema({
     title:{type:String,required:true},
     image:{type:String,required:true},
     category:{type:String,required:true}
},{
     timestamps:true
})


const Portfolio = mongoose.model('Portfolio', portfolioSchema)

export default Portfolio