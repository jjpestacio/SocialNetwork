import React, { Component, PropTypes } from 'react'

// Children
import InputForm from './inputForm'

class PostToWall extends Component {
	constructor(props) {
		super(props); // currentId, submitPost()
		this.post = this.post.bind(this);
	}

	post(text) {
		const { currentId, submitPost } = this.props;
		submitPost(currentId, {author: 'USER', text});
	}

	render() {
		const { isFriend } = this.props;

		if (!isFriend)
			return false

		return (
			<InputForm post={this.post}/>
		)
	}
}

PostToWall.propTypes = {
	currentId: PropTypes.number.isRequired,
	isFriend: PropTypes.bool.isRequired,
	submitPost: PropTypes.func.isRequired
}

export default PostToWall