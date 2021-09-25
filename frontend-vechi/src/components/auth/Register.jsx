import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import request from './authRequests'
import { UserContext } from '../context/user-context'

const Register = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [nickname, setNickname] = useState('')
	const [error, setError] = useState(null)

	const onChange = (field, value) => {
		field === 'email' && setEmail(value)
		field === 'password' && setPassword(value)
		field === 'nickname' && setNickname(value)
	}
	const register = async e => {
        e.preventDefault()
		if (!email || !nickname || !password) {
			setTimeout(() => setError(null), 2000)
			return setError('No field must be empty.')
		}
		const data = await request({
			type: 'REGISTER',
			payload: { email, password, nickname },
        })
        if(data && !data.error) {
            props.history.push('/login')
        }
	}
	return (
		<div className='d-flex h-100'>
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
							<div className='d-flex flex-column align-items-center m-2'>
								<label htmlFor='Username'>Nickname</label>
								<input
									type='text'
									className='form-control col-lg-8 col-md-12'
									id='nickname'
									placeholder='Enter your username...'
									onChange={e => onChange('nickname', e.target.value)}
								/>
							</div>
							<div className='d-flex flex-column align-items-center m-2'>
								<label htmlFor='password'>Password</label>
								<input
									type='text'
									className='form-control col-lg-8 col-md-12'
									id='password'
									placeholder='Enter password...'
									onChange={e => onChange('password', e.target.value)}
								/>
							</div>
							<div className='d-flex flex-column align-items-center m-2'>
								<button
									// style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}
									className='btn btn-success'
									onClick={register}
								>
									Register
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

export default Register
