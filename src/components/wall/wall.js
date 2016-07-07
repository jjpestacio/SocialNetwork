import React, { Component, PropTypes } from 'react'

// Components
import Post from './post'

class Wall extends Component {
	constructor(props) {
		super(props); // currentId, isFriend, posts, removePost
		this.grabPosts = this.grabPosts.bind(this);
		this.removePost = this.removePost.bind(this);
	}

	grabPosts() {
		const { posts, isFriend, currentId } = this.props;

		if (!isFriend)
			return ( <h4>You must add this person to see their wall.</h4> )

		if (posts === undefined)
			return

		return (
			posts.map((post, index) =>  
				<Post key={index} currentId={currentId} 
					id={index} author={post.author} text={post.text} 
					removePost={() => this.removePost(index)}/>
			)
		)
	}

	removePost(id) {
		const { currentId, removePost } = this.props;

		// dispatch
		removePost(currentId, id);
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
	currentId: PropTypes.number.isRequired,
	isFriend: PropTypes.bool.isRequired,
	posts: PropTypes.array.isRequired,
	removePost: PropTypes.func.isRequired
}

export default Wall