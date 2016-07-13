import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router' 

// Components
import Friend from './friend'

class FriendList extends Component {
	constructor(props) {
		super(props); // fetchData(), friends, isUserPage, profileId, removeFriend()

		// Functions
		this.grabFriends = this.grabFriends.bind(this);
		this.removeFriend = this.removeFriend.bind(this);
		this.viewProfile = this.viewProfile.bind(this);
	}

	grabFriends() {
		const { friends, isUserPage } = this.props;

		if (friends === undefined) // friends is empty
			return false

		return (
			friends.map( friend => 
				<Friend key={friend.id}
					id={friend.id} name={friend.name} isUserPage={isUserPage}
					viewProfile={() => this.viewProfile(friend.id)} 
					removeFriend={() => this.removeFriend(friend.id)} />
			)
		)
	}

	removeFriend(id) {
		const { profileId, removeFriend } = this.props;
		removeFriend(profileId, id);
	}

	viewProfile(id) {
		const { fetchData } = this.props;

		browserHistory.push('/' + id);
		fetchData(id);
	}

	render() {
		return (
			<div>
				<h2>FriendList</h2>
				{this.grabFriends()}
			</div>
		)
	}
}

FriendList.propTypes = {
	fetchData: PropTypes.func.isRequired,
	friends: PropTypes.array.isRequired,
	isUserPage: PropTypes.bool.isRequired,
	profileId: PropTypes.number.isRequired,
	removeFriend: PropTypes.func.isRequired,
}

export default FriendList

