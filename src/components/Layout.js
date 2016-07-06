import React, { Component } from 'react'
import { browserHistory } from 'react-router'

// Components
import HomeButton from './home'
import FriendListContainer from '../containers/friendListContainer'
import WallContainer from '../containers/wallContainer'
import PostToWallContainer from '../containers/postToWallContainer'
import OtherPeopleContainer from '../containers/otherPeopleContainer'

export default class Layout extends Component {
	constructor(props) {
		super(props); // viewProfile()
	}

	componentDidUpdate() {
		const { id } = this.props.params;

		// dispatch
		this.props.viewProfile(id);
	}

	render() {
	    return (
	      <div> 
	      	<HomeButton />
	        <FriendListContainer />
	        <WallContainer /><br/>
	        <PostToWallContainer />
	        <OtherPeopleContainer />
	      </div>
	    )
	}
}