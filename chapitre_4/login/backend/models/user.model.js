const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    email: String,
    password: { type: String, min: 8},
    firstName: String,
    lastName: String,
    surname: String,
    dateOfBirth: { type: Date, required: true, trim: true }
})

module.exports = mongoose.model('User', UsersSchema)