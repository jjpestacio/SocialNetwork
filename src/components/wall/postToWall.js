import React, { Component, PropTypes } from 'react'

// Children
import InputForm from './inputForm'

class PostToWall extends Component {
	constructor(props) {
		super(props); // nextFreeId, profileId, submitPost(), userName

		// Functions
		this.post = this.post.bind(this);
	}

	post(text) {
		const { userName, nextFreeId, profileId, submitPost } = this.props;

		submitPost(profileId, { id: nextFreeId, author: userName, text });
	}

	render() {
		return (
			<InputForm submitPost={this.post} />
		)
	}
}

PostToWall.propTypes = {
	nextFreeId: PropTypes.number.isRequired,
	profileId: PropTypes.number.isRequired,
	submitPost: PropTypes.func.isRequired,
	userName: PropTypes.string.isRequired
}

export default PostToWall