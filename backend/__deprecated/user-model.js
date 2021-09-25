const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new mongoose.Schema({
	nickname: String,
	email: String,
	password: String,
})

userSchema.pre('save', function(next) {
	this.password = bcrypt.hashSync(this.password, saltRounds)
	next()
})

module.exports = mongoose.model('User', userSchema)
