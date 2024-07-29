const express = require('express')
const app = express()
const studentRoute = require('./routes/student')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://adityagupta5277:McrfG78gDhvDAVGv@hogwarts.bizpecb.mongodb.net/')

mongoose.connection.on('error',err=>{
    console.log('Connection failed');
})
mongoose.connection.on('connected',connected=>{
    console.log('Connected to MongoDB Atlas');
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/student',studentRoute)
app.use('/',(req,res,next)=>{
    res.status(200).json({
        notification: "Welcome onboard, Hogwarts Express..."
    })
})

module.exports = app; 