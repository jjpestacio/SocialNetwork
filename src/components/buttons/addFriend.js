import React, { Component, PropTypes } from 'react'

const AddFriendButton = ({ id, userId, addFriend }) => (
	<button onClick={() => addFriend(id, userId)}>Add Friend</button>
)

AddFriendButton.propTypes = {
	id: PropTypes.number.isRequired,
	userId: PropTypes.number.isRequired,
	addFriend: PropTypes.func.isRequired
}

export default AddFriendButton