import React, { Component, PropTypes } from 'react'

// Constants
import { USER_ID } from '../../constants/constants'

class AddFriendButton extends Component {
	constructor(props) {
		super(props); // addFriend(), currentId, isFriend
		this.addAsFriend = this.addAsFriend.bind(this);
	}

	addAsFriend() {
		const { addFriend, currentId, isFriend } = this.props;
		addFriend(USER_ID, currentId);
	}

	render() {
		const { isFriend } = this.props;

		if (isFriend)
			return false

		return (
			<button type="button" onClick={this.addAsFriend}>Add Friend</button>
		)
	}
}

AddFriendButton.propTypes = {
	addFriend: PropTypes.func.isRequired,
	currentId: PropTypes.number.isRequired,
	isFriend: PropTypes.bool.isRequired
}

export default AddFriendButton