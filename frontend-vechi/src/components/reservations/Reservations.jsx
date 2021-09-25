import React from 'react'

const Reservations = props => {
	const { facility, field } = props.match.params
	return (
		<div>
			data for {facility} - {field}: ...
		</div>
	)
}

export default Reservations
