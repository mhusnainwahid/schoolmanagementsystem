import mongoose from "mongoose"


export const connectDb = async()=>{
    try {
        const connectMongo = mongoose.connect('mongodb+srv://mhusnainwahid:husnain@cluster0.rvytadc.mongodb.net/')
    } catch (error) {
        console.log("MongoDb is not connect!",error)
    }
}