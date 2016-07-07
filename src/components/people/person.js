import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const Person = ({ id, name, viewProfile, addFriend }) => (
	<li>
		ID: {id} NAME: {name}
		<button onClick={viewProfile}>View Profile</button>
		<button onClick={addFriend}>Add Friend</button>
	</li>		
)

Person.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	viewProfile: PropTypes.func.isRequired,
	addFriend: PropTypes.func.isRequired
}

export default Person