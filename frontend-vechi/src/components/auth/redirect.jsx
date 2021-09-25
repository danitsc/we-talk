import { Redirect, Route } from 'react-router-dom'
import React, { useContext } from 'react'

import { UserContext } from '../context/user-context'

const RedirectRoute = ({ component: Component, ...rest }) => {
	// const userContext = useContext(UserContext)
	const { loggedIn } = rest
	return (
		<Route
			{...rest}
			render={props =>
				loggedIn ? (
					<Redirect to={rest.pathToRedirect} />
				) : (
					<Component {...props} {...rest} />
				)
			}
		/>
	)
}

export default RedirectRoute
