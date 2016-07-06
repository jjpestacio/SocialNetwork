import React, { Component, PropTypes } from 'react'

import { browserHistory } from 'react-router' 

// Children
import Person from './person'

// Helper Functions
const grabOtherPeople = (otherPeople, viewProfile, addFriend) => {
	if (otherPeople === undefined)
		return

	return (
		otherPeople.map((person, index) =>  
			<Person key={index} id={person.id} name={person.name} 
				viewProfile={() => viewProfile(person.id)} 
				addFriend={() => addFriend(person.id)}/>
		)
	)
}

class OtherPeople extends Component {
	constructor(props) {
		super(props); // currentId, otherPeople, viewProfile(), addFriend()
		this.viewProfile = this.viewProfile.bind(this);
		this.addFriend = this.addFriend.bind(this);
	}

	viewProfile(id) {
		browserHistory.push('/' + id);
	}

	addFriend(id) {
		const { currentId, addFriend } = this.props;
		addFriend(currentId, id);
	}

	render() {
		return (
			<div>
				<h2>People You May Know</h2>
				{grabOtherPeople(this.props.otherPeople, this.viewProfile, this.addFriend)}
			</div>
		)
	}
}

OtherPeople.propTypes = {
	currentId: PropTypes.string.isRequired,
	otherPeople: PropTypes.array.isRequired,
	viewProfile: PropTypes.func.isRequired,
	addFriend: PropTypes.func.isRequired
}

export default OtherPeople