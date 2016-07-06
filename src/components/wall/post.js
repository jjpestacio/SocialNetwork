import React, { Component, PropTypes } from 'react'

const Post = ({id, author, text, removePost}) => (
	<li>
		ID: {id} AUTHOR: {author} TEXT: {text}
		<button type="button" onClick={removePost}>Delete</button>
	</li>
)

Post.propTypes = {
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default Post