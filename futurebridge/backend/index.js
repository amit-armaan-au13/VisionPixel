const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const MovieController = require('./controllers/MovieController')

connectDB()
const app = express()
const Port = 5000

app.use(cors())


app.get('/',(req,res)=>{
    res.send("HeatltCheck done!!!")
})

app.use(express.json())

app.use('/api',MovieController)

app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`)
})