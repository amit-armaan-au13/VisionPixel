const express = require('express')
const route = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/UserSchema')

route.use(express())


route.post('/register',async (req,res)=>{
    if(!(req.body.name && req.body.email && req.body.password)) return res.json({message:"enter the required fields"})
    var hashPassword =  await bcrypt.hashSync(req.body.password,8);
    const user =  await User.findOne({email:req.body.email})
    if(user) return res.json({message:"User already exists"})
    else{
        User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword
        },(err,data)=>{
            if(err) throw err;
            res.status(200).json({message:"registered successfully"})
        })
    }
})

route.get('/profile',(req,res)=>{
    var token = req.headers["x-access-token"];
    if(!token) return res.json({message:"Login failed"})
    jwt.verify(token,"MY_SECRET_KEY",(err,data)=>{
        if(err)return res.json({message:"invalid token"})
        User.findById(data.id,(err,data)=>{
            if(err) return res.json({message:"No user found"})
            res.json({data})
        })
    })
})


route.post('/login',  async (req,res)=>{
        await User.findOne({email:req.body.email},(err,data)=>{
        if(err) return res.status(500).json({message:"Error while login"})
        if(!data) return res.json({auth:false,message:"email invalid"})
        else{
            const passIsValid =  bcrypt.compareSync(req.body.password,data.password)
            if(!passIsValid) return res.json({auth:"auth failed",message:"password invalid"})
            var token = jwt.sign({id:data.id},"MY_SECRET_KEY",{expiresIn:3600})
            res.json({message:"success Login",Token:token})
        }
    })
})

route.get('/users',(req,res)=>{
    User.find({},(err,data)=>{
        if(err){
            throw err
        }
        else{
            res.status(200).send(data)
        }
    })
})

module.exports = route