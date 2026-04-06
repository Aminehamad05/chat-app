import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.get('/api/auth/login',(req,res)=>{
    res.send("Login endpoint")
})
app.get('/api/auth/signup',(req,res)=>{
    res.send("Login endpoint")
})
app.get('/api/auth/login',(req,res)=>{
    res.send("Login endpoint")
})
app.listen(PORT, () => {
    console.log(`SERVER running on ${PORT}`);
});