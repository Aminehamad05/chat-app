import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import cookiePaser from "cookie-parser"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use("/api/auth",authRoutes)
app.listen(PORT, () => {
    console.log(`SERVER running  on ${PORT}`);
    connectDB()
});