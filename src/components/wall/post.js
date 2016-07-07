import React, { Component, PropTypes } from 'react'

// Components
import RemoveButton from '../buttons/remove'

const Post = ({ currentId, id, author, text, removePost }) => (
	<li>
		ID: {id} AUTHOR: {author} TEXT: {text}
		<RemoveButton currentId={currentId} remove={removePost} />
	</li>
)

Post.propTypes = {
	author: PropTypes.string.isRequired,
	currentId: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
	removePost: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}

export default Post