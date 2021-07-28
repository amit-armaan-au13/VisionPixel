const mongoose = require('mongoose')
 const MovieSchema = new mongoose.Schema({
     title:String,
     subTitle:String,
     description:String,
     image:String,
     rating:Number
 })

 mongoose.model("Movies",MovieSchema);
 module.exports = mongoose.model('Movies')