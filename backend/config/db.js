import mongoose from "mongoose"

const Mongo = async() =>{
    try {
       const MongoDB = await mongoose.connect(process.env.MONGO_URL) 
       console.log(`mongoose is Running Sucessfully on ${MongoDB.connection.host}`) 
    } catch (error) {
        console.log(`Mongo Not Found ${error.message}`)
        process.exit(1)
    }
}

export default Mongo