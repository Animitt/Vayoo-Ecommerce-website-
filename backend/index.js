import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import authRoutes from './routes/authRoutes.js';
dotenv.config();
let port = process.env.PORT || 6000;
connectDB();
let app=express();

//middleware function to parse json requests
app.use(express.json());
//middleware to parse cookies
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173/",
    Credential:true
}))
//routes
app.use('/api/auth',authRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    //connect to database
})