const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: {type:String, trim:true, required:true},
    lastName: {type:String, trim:true},
    username: {type: String, trim:true, required: true, unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model("User", userSchema)

module.exports = User