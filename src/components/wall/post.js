import React, { Component, PropTypes } from 'react'

const Post = ({ id, author, text, isUserPage, removePost }) => (
	<li>
		AUTHOR: {author} TEXT: {text}
		
		{ isUserPage ? 
			<button onClick={removePost}>Delete</button>
		: null }

	</li>
)

Post.propTypes = {
	author: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	isUserPage: PropTypes.bool.isRequired,
	removePost: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}

export default Post