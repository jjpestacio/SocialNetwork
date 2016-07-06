import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const Friend = ({id, name, viewProfile, removeFriend}) => (
	<li>
		ID: {id} NAME: {name}
		<button onClick={viewProfile}>View Profile</button>
		<button onClick={removeFriend}>Remove Friend</button>
	</li>		
)

Friend.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	viewProfile: PropTypes.func.isRequired,
	removeFriend: PropTypes.func.isRequired
}

export default Friend