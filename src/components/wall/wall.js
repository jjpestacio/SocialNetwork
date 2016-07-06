import React, { Component, PropTypes } from 'react'

import Post from './post'

class Wall extends Component {
	constructor(props) {
		super(props);
		this.grabPosts = this.grabPosts.bind(this);
		this.removePost = this.removePost.bind(this);
	}

	grabPosts(posts, removePost) {
		if (posts === undefined)
			return

		return (
			posts.map((post, index) =>  
				<Post key={index} id={index} 
					author={post.author} text={post.text} 
					removePost={() => removePost(index)}/>
			)
		)
	}

	removePost(id) {
		const { currentId, removePost } = this.props;
		removePost(currentId, id);
	}

	render() {
		const { posts } = this.props;

		return (
			<div>
				<h2>Wall</h2>
				{this.grabPosts(posts, this.removePost)}
			</div>
		);
	}
}

Wall.propTypes = {
	posts: PropTypes.array.isRequired
}

export default Wall