import React, { useState, useContext } from 'react'
import request from './authRequests'
import { Link } from 'react-router-dom'
import socket from '../services/requests-wrapper'
import { useHistory } from 'react-router'
import { UserContext } from '../context/user-context'
import { palette } from '../../theme/style'
import './Login.css'

const Login = ({ setLoggedIn }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	const [keepLoggedIn, setKeepLoggedIn] = useState(true)
	const { LOGIN } = useContext(UserContext)
	let history = useHistory()
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
		const email = 'lala'
		LOGIN(email)
		setLoggedIn(true)
	}
	return (
		<div
			className='login-box container h-90 w-90 d-flex flex-column'
			style={{ color: palette.offWhite }}
		>
			<div className='login-messages-box align-self-center'>
				<h2>LOGO</h2>
				<span>Bine ai venit !</span>
				<span>Intra in cont</span>
			</div>
			<div className='d-flex flex-column'>
				<div className='d-flex flex-column'>
					<div class=''>
						{/* <h2>Login</h2> */}
						<form>
							<div class='user-box'>
								<input type='text' />
								<label>Username</label>
							</div>
							<div class='user-box'>
								<input type='password' />
								<label>Password</label>
							</div>
						</form>
					</div>
				</div>
				<div className='d-flex justify-content-between'>
					<div class='custom-control custom-switch'>
						<input
							type='checkbox'
							class='custom-control-input'
							id='customSwitch1'
							checked={keepLoggedIn}
							onChange={e => setKeepLoggedIn(!keepLoggedIn)}
						/>
						<label class='custom-control-label' for='customSwitch1'>
							Pastreaza-ma conectat
						</label>
					</div>
					<div>
						<span className='text-danger forgot-password-btn'>
							Ai uitat parola?
						</span>
					</div>
				</div>
				<div className='d-flex justify-content-center connect-btn-box'>
					<button className='btn btn-outline-success w-50' onClick={login}>
						Conectare
					</button>
				</div>
				<div className='d-flex justify-content-center no-account-box'>
					<h5>
						Nu ai cont inca?{' '}
						<span
							className='text-primary'
							onClick={() => history.push('/register')}
						>
							Inregistreaza-te aici
						</span>
					</h5>
				</div>
			</div>
		</div>
	)
}

export default Login
