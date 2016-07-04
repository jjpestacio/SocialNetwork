import React from 'react'

const Friend = ({viewProfile, onClick, name}) => (
	<li>
		{name}
		<button onClick={onClick}>Remove Friend</button>
		<button onClick={viewProfile}>View Profile</button>
	</li>
)

export default Friend