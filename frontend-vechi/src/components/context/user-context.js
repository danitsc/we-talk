import createDataContext from './create-data-context.jsx'

const dataReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN': {
			const {
				payload: { nickname },
			} = action
			// localStorage.setItem('token', token)
			return { ...state, user: { nickname } }
		}
		case 'LOGOUT': {
			return { ...state, user: null }
		}
		default: {
			return state
		}
	}
}

const LOGIN = dispatch => {
	return nickname => {
		console.log('lol', nickname)
		dispatch({ type: 'LOGIN', payload: { nickname } })
	}
}

const LOGOUT = dispatch => {
	return () => {
		dispatch({ type: 'LOGOUT' })
	}
}

export const { Context: UserContext, Provider: UserProvider } =
	createDataContext(
		dataReducer,
		{
			LOGIN,
			LOGOUT,
		},
		{}
	)
