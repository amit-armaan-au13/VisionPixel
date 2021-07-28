const express = require('express')
const route = express.Router()
const Movies = require('../models/movieSchema')


route.use(express())

route.post('/newMovie',async(req,res)=>{
    Movies.create({
        title:req.body.title,
        subTitle:req.body.subTitle,
        description:req.body.description,
        image:req.body.image,
        rating:req.body.rating

    },(err,data)=>{
        if(err) throw err
        res.status(200).json({"message":"movie added successfully"})
    })
})

route.get('/getMovies',async(req,res)=>{
     Movies.find({},(err,items)=>{
        if(err)throw err
        res.status(200).json({
            message:items
        })
    })
})

module.exports = route
