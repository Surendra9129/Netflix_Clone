const express=require('express');
const mongoose=require('mongoose')
const port=5000;
const app=express();
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Connection Successful')
})
.catch((err)=>console.log(err))

app.listen(port,()=>{
    console.log(`app is runnin on port ${port}`);
});