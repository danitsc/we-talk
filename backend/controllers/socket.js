const CONSTANTS = require('../utils/constants')
const users = {}
const chatRooms = {}
const getNewUsers = () => Object.keys(users).map(id => users[id].nickname)

// const isUser = (users, id) => id in users
module.exports = io => socket => {
	const { NEW_USER, USER_EXISTS, SUBSCRIBE_TO_CHANNEL } = CONSTANTS.SOCKET
	socket.on(NEW_USER, user => {
		const { nickname } = user
		const userExists = Object.keys(users).find(
			id => users[id].nickname === nickname
		)
		const { id } = socket
		if (userExists) {
			return io.to(id).emit(USER_EXISTS, {
				error: `Username ${nickname} already taken.`,
			})
		}
		users[id] = { nickname }
		// const newUser = Object.keys(users).map(id => users[id].nickname)
		console.log('All users: ', users)
		io.emit(NEW_USER, {
			message: `User ${nickname} entered the room.`,
			newUser: nickname,
		})
	})

	socket.on(SUBSCRIBE_TO_CHANNEL, data => {
		const { channel, nickname } = data
		socket.join(channel)
        console.log('O intrat pe canalu', channel, nickname, data)
        const usersInChannel = io.in(channel).clients((err, clients) => {
            
            console.log('ce useri avem>?', clients)
            const members = []
            clients.forEach(client => members.push(users[client]))
            io.sockets
                .in(channel)
                .emit('JOIN_CHANNEL', {
                    message: `User ${nickname} joined the cannel.`,
                    members
                })
        })
	})

	socket.on('join', () => {
		console.log('o venit useru nou', socket.id)
	})

	socket.emit('GET_USERS', { users: getNewUsers() })

	socket.on('disconnect', user => {
		console.log('o iesit', socket.id)
		delete users[socket.id]
		socket.emit('GET_USERS', { users: getNewUsers() })
	})
}
