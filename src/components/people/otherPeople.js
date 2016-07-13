import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router' 

// Components
import Person from './person'

class OtherPeople extends Component {
	constructor(props) {
		super(props); // addFriend(), fetchData(), otherPeople, profileId

		// Functions
		this.addFriend = this.addFriend.bind(this);
		this.grabOtherPeople = this.grabOtherPeople.bind(this);
		this.viewProfile = this.viewProfile.bind(this);
	}

	grabOtherPeople() {
		const { otherPeople } = this.props;

		if (otherPeople === undefined)
			return

		return (
			otherPeople.map( person =>  
				<Person key={person.id} 
					id={person.id} name={person.name} 
					viewProfile={() => this.viewProfile(person.id)} 
					addFriend={() => this.addFriend(person.id)} />
			)
		)
	}

	addFriend(id) {
		const { addFriend, profileId } = this.props;
		addFriend(profileId, id);
	}

	viewProfile(id) {
		const { fetchData } = this.props;

		browserHistory.push('/' + id);
		fetchData(id);
	}

	render() {
		return (
			<div>	
				<h2>People You May Know</h2>
				{this.grabOtherPeople()}
			</div>
		)
	}
}

OtherPeople.propTypes = {
	addFriend: PropTypes.func.isRequired,
	fetchData: PropTypes.func.isRequired,
	otherPeople: PropTypes.array.isRequired,
	profileId: PropTypes.number.isRequired,
}

export default OtherPeople