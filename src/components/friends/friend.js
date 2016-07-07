import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// Components
import RemoveButton from '../buttons/remove'

const Friend = ({ currentId, id, name, removeFriend, viewProfile }) => (
	<li>
		ID: {id} NAME: {name}
		<button onClick={viewProfile}>View Profile</button>
		<RemoveButton currentId={currentId} remove={removeFriend} />
	</li>		
)

Friend.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	viewProfile: PropTypes.func.isRequired,
	removeFriend: PropTypes.func
}

export default Friend