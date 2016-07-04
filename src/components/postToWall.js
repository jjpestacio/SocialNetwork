import React, { Component } from 'react'
import { connect } from 'react-redux'
import { post } from '../actions/wall'

import { addFriend } from '../actions/people'

class PostToWall extends Component {
	constructor(props) {
		super(props); // { dispatch }
		this.state = {
			author: '',
			text: ''
		};
	}

	handleAuthorChange(e) {
		this.setState({author: e.target.value});
	}

	handleTextChange(e) {
		this.setState({text: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		
		this.props.dispatch(post({
			author: this.state.author, 
			text: this.state.text
		}));

		this.setState({
			author: '',
			text: ''
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}/>
					<input type="text" value={this.state.text} onChange={this.handleTextChange.bind(this)}/>
					<button type="submit">Post</button>
				</form>
			</div>
		);
	}
}

PostToWall = connect()(PostToWall);

export default PostToWall