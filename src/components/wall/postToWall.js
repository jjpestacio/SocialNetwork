import React, { Component, PropTypes } from 'react'

// Children
import InputForm from '../forms/inputForm'

class PostToWall extends Component {
	constructor(props) {
		super(props); // nextFreeId, profileId, submitPost(), username

		// Functions
		this.post = this.post.bind(this);
	}

	post(text) {
		const { username, nextFreeId, profileId, submitPost } = this.props;

		submitPost(profileId, { id: nextFreeId, author: username, text });
	}

	render() {
		return (
			<InputForm submit={this.post} text="Post"
				placeHolder="Write something here ..." />
		)
	}
}

PostToWall.propTypes = {
	nextFreeId: PropTypes.number.isRequired,
	profileId: PropTypes.number.isRequired,
	submitPost: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

export default PostToWall