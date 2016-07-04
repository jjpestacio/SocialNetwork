import React from 'react'

const Person = ({onClick, name}) => (
	<li>
		{name}
		<button onClick={onClick}>Add Friend</button>
	</li>
) 

export default Person