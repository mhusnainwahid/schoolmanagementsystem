import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 8080
const app = express()
app.use(cors())

app.listen(PORT,()=>{
    console.log(`Server is ruuning on Port: ${PORT}`)
})