import socketIOClient from 'socket.io-client'

const ENDPOINT = 'http://127.0.0.1:5000'

const socket = socketIOClient(ENDPOINT)

// const request = async info => {
// 	const { type, event, callback, payload } = info
// 	switch (type) {
// 		case 'on': {
// 			// const data = socket.on(event, callback)
// 			// return data
// 		}
// 		case 'emit': {
// 			// socket.emit(event, payload)
// 		}
// 	}
// }
export default socket
// export { request }
