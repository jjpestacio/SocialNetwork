import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router' 

// Constants
import { USER_ID } from '../../constants/constants'

// Components
import Person from './person'

class OtherPeople extends Component {
	constructor(props) {
		super(props); // currentId, otherPeople, addFriend()
		this.addFriend = this.addFriend.bind(this);
		this.grabOtherPeople = this.grabOtherPeople.bind(this);
		this.viewProfile = this.viewProfile.bind(this);
	}

	grabOtherPeople() {
		const { otherPeople } = this.props;

		if (otherPeople === undefined)
			return

		return (
			otherPeople.map(( person, index ) =>  
				<Person key={index} id={person.id} name={person.name} 
					viewProfile={() => this.viewProfile(person.id)} 
					addFriend={() => this.addFriend(person.id)}/>
			)
		)
	}

	addFriend(id) {
		const { addFriend, currentId } = this.props;
		addFriend(currentId, id);
	}

	viewProfile(id) {
		browserHistory.push('/' + id);
	}

	render() {
		const { currentId } = this.props;

		if (currentId != 0)
			return false;

		return (
			<div>
				<h2>People You May Know</h2>
				{this.grabOtherPeople()}
			</div>
		)
	}
}

OtherPeople.propTypes = {
	currentId: PropTypes.number.isRequired,
	otherPeople: PropTypes.array.isRequired,
	viewProfile: PropTypes.func.isRequired,
	addFriend: PropTypes.func.isRequired
}

export default OtherPeople