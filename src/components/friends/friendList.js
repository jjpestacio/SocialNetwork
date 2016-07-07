import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router' 

// Components
import Friend from './friend'

class FriendList extends Component {
	constructor(props) {
		super(props); // currentId, friends, isFriend, removeFriend()
		this.removeFriend = this.removeFriend.bind(this);
		this.grabFriends = this.grabFriends.bind(this);
		this.viewProfile = this.viewProfile.bind(this);
	}

	grabFriends() {
		const { currentId, friends, isFriend } = this.props;

		if (!isFriend)
			return ( <h4>You must add this person to see their friend list.</h4> )

		if (friends === undefined) // friends is empty
			return false
	
		return (
			friends.map(( friend, index ) =>  
				<Friend key={index} currentId={currentId} 
					id={friend.id} name={friend.name} 
					viewProfile={() => this.viewProfile(friend.id)} 
					removeFriend={() => this.removeFriend(friend.id)}/>
			)
		)	
	}

	removeFriend(id) {
		const { currentId, removeFriend } = this.props;

		// dispatch
		removeFriend(currentId, id);
	}

	viewProfile(id) {
		browserHistory.push('/' + id);
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
	currentId: PropTypes.number.isRequired,
	friends: PropTypes.array.isRequired,
	isFriend: PropTypes.bool.isRequired,
	removeFriend: PropTypes.func.isRequired,
	viewProfile: PropTypes.func.isRequired
}

export default FriendList

