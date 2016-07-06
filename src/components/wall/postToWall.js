import React, { Component, PropTypes } from 'react'

// Children
import InputForm from './inputForm'

class PostToWall extends Component {
	constructor(props) {
		super(props);
		this.post = this.post.bind(this);
	}

	post(text) {
		const { currentId, submitPost } = this.props;
		submitPost(currentId, {author: 'USER', text});
	}

	render() {
		return (
			<InputForm post={this.post}/>
		)
	}
}

PostToWall.propTypes = {
	currentId: PropTypes.string.isRequired,
	submitPost: PropTypes.func.isRequired
}

export default PostToWall