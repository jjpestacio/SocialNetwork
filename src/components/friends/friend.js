import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const Friend = ({ id, name, isUserPage, removeFriend, viewProfile }) => (
	<li>
		ID: {id} NAME: {name}
		
		<button onClick={viewProfile}>View Profile</button>

		{ isUserPage ? 
			<button onClick={removeFriend}>Remove Friend</button>
		: null }

	</li>
)

Friend.propTypes = {
	id: PropTypes.number.isRequired,
	isUserPage: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	viewProfile: PropTypes.func.isRequired,
	removeFriend: PropTypes.func.isRequired
}

export default Friend