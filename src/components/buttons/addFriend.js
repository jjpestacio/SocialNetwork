import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import { addFriend } from '../../actions/index'

const AddFriendButton = ({ id, userId, addFriend }) => (
	<button onClick={() => addFriend(id, userId)}>Add Friend</button>
)

const mapStateToProps = ( state ) => {
	const { id, userId } = state;

	return {
		id,
		userId
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		addFriend: ( profileId, id ) => {
			dispatch(addFriend(profileId, id))
		}
	}
}

AddFriendButton.propTypes = {
	id: PropTypes.number.isRequired,
	userId: PropTypes.number.isRequired,
	addFriend: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
    mapDispatchToProps
)(AddFriendButton)