import { Redirect, Route } from 'react-router-dom'
import React, { useContext } from 'react'

import { UserContext } from '../context/user-context'

const PrivateRoute = ({ component: Component, ...rest }) => {
	// const { state } = useContext(UserContext)
	const { loggedIn } = rest
	return (
		<Route
			{...rest}
			render={props =>
				loggedIn ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	)
}

export default PrivateRoute
