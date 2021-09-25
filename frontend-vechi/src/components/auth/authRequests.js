import { Redirect } from 'react-router-dom'
import { create } from 'apisauce'
const api = create({ baseURL: 'http://127.0.0.1:5000' })

const request = async info => {
	const { type, payload } = info
	const { email, password, nickname } = payload
	switch (type) {
		case 'LOGIN': {
			const { data } = await api.post('/api/v1/authenticate', {
				email,
				password,
            })
			return data
		}
		case 'REGISTER': {
			const { data } = await api.post('/api/v1/register', {
				email,
				password,
				nickname,
			})
			return data
		}
	}
}

export default request
