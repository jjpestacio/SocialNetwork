import React, { Component, PropTypes } from 'react'

// Components
import Post from './post'

class Wall extends Component {
	constructor(props) {
		super(props); // isUserPage, profileId, removePost(), wall
		
		// Functions
		this.grabPosts = this.grabPosts.bind(this);
		this.removePost = this.removePost.bind(this);
	}

	grabPosts() {
		const { isUserPage, wall } = this.props;

		if (wall === undefined) // no posts
			return

		return (
			wall.map(( post, index ) =>  
				<Post key={index} isUserPage={isUserPage}
					id={post.id} author={post.author} text={post.text} 
					removePost={() => this.removePost(post.id)} />
			)
		)
	}

	removePost(id) {
		const { profileId, removePost } = this.props;

		removePost(profileId, id);
	}

	render() {
		return (
			<div>
				<h2>Wall</h2>
				{this.grabPosts()}
			</div>
		)
	}
}

Wall.propTypes = {
	isUserPage: PropTypes.bool.isRequired,
	profileId: PropTypes.number.isRequired,
	wall: PropTypes.array.isRequired,
	removePost: PropTypes.func.isRequired
}

export default Wall