const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const socketController = require('./controllers/socket')(io)
const userController = require('./controllers/user')

const PORT = process.env.PORT || 5000

app.use(cors())
// const { searchUser } = require('./helpers/userHelper')

app.set('secretKey', 'nodeRestApi')
app.use(express.json())

app.get('/health', (req, res) => {
	res.send('good')
})

app.use(bodyParser.urlencoded({ extended: false }))
io.on('connection', socketController)

server.listen(PORT, () => console.log(`Backend running on ${PORT}`))