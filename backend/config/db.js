const mongoose = require('mongoose')
const MongoUri = "mongodb://armaanJaami:jaya1996@cluster0-shard-00-00.z9edl.mongodb.net:27017,cluster0-shard-00-01.z9edl.mongodb.net:27017,cluster0-shard-00-02.z9edl.mongodb.net:27017/visionPixel?ssl=true&replicaSet=atlas-tm48j9-shard-0&authSource=admin&retryWrites=true&w=majority"


const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(MongoUri,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}
module.exports = connectDB