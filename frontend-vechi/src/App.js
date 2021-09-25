import React, { useEffect, useState, useContext } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import Main from './components/Main/Main.jsx'
import Reservations from './components/reservations/Reservations'
import Header from './components/Main/Header'
import PrivateRoute from './components/auth/private.jsx'
import RedirectRoute from './components/auth/redirect.jsx'
import Modal from './components/modal/Modal.jsx'
import { UserContext } from './components/context/user-context'
import jwt_decode from 'jwt-decode'

const LoginMock = () => {
	return (
		<div>
			<div>LOGO</div>
			<div>
				<h3>Bine ai venit !</h3>
			</div>
			<div>
				<div>
					<span>Email</span>
					<input />
				</div>
				<div>
					<span>Parola</span>
					<input />
				</div>
			</div>
			<div>
				<button class='btn btn-primary'>Conectare</button>
			</div>
		</div>
	)
}

function App() {
	const { state, LOGIN } = useContext(UserContext)
	const [loggedIn, setLoggedIn] = useState(false)
	const [showModal, setShowModal] = useState(false)
	// const state = {}
	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('token')
			if (token) {
				const decodedToken = jwt_decode(token)
				if (decodedToken?.id) {
					console.log('buun')
				}
			} else {
				LOGIN('daNy')
				setLoggedIn(true)
			}
		}
		fetchData()
		// const socket = socketIOClient(ENDPOINT)
	}, [])
	return (
		<div className='d-flex flex-column h-100 main-container'>
			{loggedIn && <Header showModal={showModal} setShowModal={setShowModal} />}
			{showModal && (
				<Modal showModal={showModal} setShowModal={setShowModal}>
					<LoginMock />
				</Modal>
			)}
			<div className='main-form-container h-100 container'>
				<Router>
					<Switch>
						<RedirectRoute
							setLoggedIn={setLoggedIn}
							loggedIn={loggedIn}
							exact
							path='/login'
							pathToRedirect='/'
							component={Login}
						/>
						<RedirectRoute
							exact
							path='/register'
							pathToRedirect='/'
							component={Register}
						/>
						<PrivateRoute
							setShowModal={setShowModal}
							loggedIn={loggedIn}
							exact
							path='/'
							component={Main}
						/>
						<PrivateRoute
							loggedIn={loggedIn}
							exact
							path='/rezervari/:field/:facility'
							component={Reservations}
						/>
					</Switch>
				</Router>
			</div>
		</div>
	)
}

export default App
