// const userModel = require('./user-model')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// module.exports = {
// 	create: (req, res, next) => {
// 		const { nickname, email, password } = req.body
// 		userModel.create({ nickname, email, password }, (err, result) => {
// 			if (err) {
// 				console.log(`Could not create user: ${err}`)
// 				next(err)
// 			} else
// 				res.json({ message: `User with email ${email} created successfully !` })
// 		})
// 	},

// 	authenticate: (req, res, next) => {
// 		const { email, password: authPassword } = req.body

// 		userModel.findOne({ email }, (err, userInfo) => {
// 			if (err) {
// 				console.log(`Could not authenticate: ${err}`)
// 			} else {
// 				if (userInfo) {
// 					const { _id: id, password: savedPassword, nickname } = userInfo
// 					if (bcrypt.compareSync(authPassword, savedPassword)) {
// 						const token = jwt.sign({ id }, req.app.get('JWT_KEY'), {
// 							expiresIn: '1h',
// 						})
// 						res.json({
// 							message: `Authentication succeded`,
// 							userInfo: { token, nickname, email },
// 						})
// 					} else {
// 						res.json({ error: 'Invalid email/password' })
// 					}
// 				} else {
// 					res.json({ error: `No username with email ${email}` })
// 				}
// 			}
// 		})
// 	},
// }
