const express = require("express");

const router=express.Router();

const User= require('../models/User');

//Register

router.post('/',(req,res)=>{
    const newUser= new User({
        username:req.body.username
    })
})