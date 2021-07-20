const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 5000
const AuthController = require('./controllers/AuthController')
const connectDB = require('./config/db')

connectDB()

app.get('/',(req,res) => {
    res.send(
        "health Check DOne!!!"
)
})
app.use(express.json())
app.use(cors())

app.use('/api/auth',AuthController)
app.use('/api/auth',AuthController)



app.listen(PORT,()=>{
    console.log(`server running on port  ${PORT}`)
})