const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    id:String,
    name:String,
    gender:String,
    house:String,
    wizard:Boolean
})

module.exports = mongoose.model('Student',studentSchema)