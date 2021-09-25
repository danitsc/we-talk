import React, { useState, useContext } from 'react'
import request from './authRequests'
import { Link } from 'react-router-dom'
import socket from '../services/requests-wrapper'
import { UserContext } from '../context/user-context'

const Login = ({ setLoggedIn }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	const { LOGIN } = useContext(UserContext)

	const onChange = (field, value) => {
		field === 'email' && setEmail(value)
		field === 'password' && setPassword(value)
	}
	socket.on('USER_EXISTS', () => {
		console.log('Exista useru')
		// setLoggedIn(false)
	})

	const login = async e => {
		e.preventDefault()

		socket.emit('NEW_USER', { nickname: email }, txt => {
			console.log('vine pana aici?', txt)
		})
		LOGIN(email)
		setLoggedIn(true)
		// const data = await request({
		// 	type: 'LOGIN',
		// 	payload: { email, password },
		// })
		// if (!data.error) {
		// 	console.log('wtf', data)
		// 	const {
		// 		userInfo: { nickname, token },
		// 	} = data
		// 	console.log('props before', props.history)
		// 	props.history.push('/')
		// 	console.log('props after', props.history)
		// } else {
		// 	setTimeout(() => setError(null), 2000)
		// 	// setError(data.error)
		// }
	}
	return (
		<div className='d-flex h-100 w-100'>
			<div className='container'>
				<div className='column h-100'>
					<div className='d-flex flex-column h-100 justify-content-center align-items-center'>
						<form className='col-4'>
							<div className='d-flex flex-column align-items-center m-2'>
								<label htmlFor='Username'>Email</label>
								<input
									type='text'
									className='form-control col-lg-8 col-md-12'
									id='email'
									placeholder='Enter your username...'
									onChange={e => onChange('email', e.target.value)}
								/>
							</div>
							{/* <div className='d-flex flex-column align-items-center m-2'>
								<label htmlFor='password'>Password</label>
								<input
									type='text'
									className='form-control col-lg-8 col-md-12'
									id='password'
									placeholder='Enter password...'
									onChange={e => onChange('password', e.target.value)}
								/>
							</div> */}
							<div className='d-flex flex-column align-items-center m-2'>
								<button
									// style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}
									className='btn btn-success'
									onClick={login}
								>
									Log In
								</button>
							</div>
							<div className='d-flex flex-column align-items-center m-2'>
								<div>
									<Link to='/register'>
										<span>Sign Up</span>
									</Link>
								</div>
							</div>
						</form>
						{error !== null && (
							<div style={{ textAlign: 'center' }}>{error}</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
