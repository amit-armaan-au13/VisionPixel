const mongoose = require('mongoose')
const MongoUri = "mongodb://armaanJaami:jaya1996@cluster0-shard-00-00.z9edl.mongodb.net:27017,cluster0-shard-00-01.z9edl.mongodb.net:27017,cluster0-shard-00-02.z9edl.mongodb.net:27017/Future?ssl=true&replicaSet=atlas-tm48j9-shard-0&authSource=admin&retryWrites=true&w=majority"
const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(MongoUri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    console.log(`Mongodb connected successfully  ${conn.connection.host}`)
    } catch (error) {
        console.log(`error :${error.message}`)
    }
}

module.exports = connectDB