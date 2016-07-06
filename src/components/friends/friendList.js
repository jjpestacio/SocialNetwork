import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router' 

// Children
import Friend from './friend'

// Helper Functions
const grabFriends = (friends, viewProfile, removeFriend) => {
	if (friends === undefined)
		return

	return (
		friends.map((friend, index) =>  
			<Friend key={index} id={friend.id} name={friend.name} 
				viewProfile={() => viewProfile(friend.id)} 
				removeFriend={() => removeFriend(friend.id)}/>
		)
	)
}

class FriendList extends Component {
	constructor(props) {
		super(props); // currentId, friends, viewProfile(), removeFriend()
		this.viewProfile = this.viewProfile.bind(this);
		this.removeFriend = this.removeFriend.bind(this);
	}

	viewProfile(id) {
		browserHistory.push('/' + id);
	}

	removeFriend(id) {
		const { currentId, removeFriend } = this.props;
		removeFriend(currentId, id);
	}

	render() {
		return (
			<div>
				<h2>FriendList</h2>
				{grabFriends(this.props.friends, this.viewProfile, this.removeFriend)}
			</div>
		)
	}
}

FriendList.propTypes = {
	currentId: PropTypes.string.isRequired,
	friends: PropTypes.array.isRequired,
	viewProfile: PropTypes.func.isRequired,
	removeFriend: PropTypes.func.isRequired
}

export default FriendList

