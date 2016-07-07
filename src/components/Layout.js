import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

// Components
import AddFriendButtonContainer from '../containers/addFriendButtonContainer'
import FriendListContainer from '../containers/friendListContainer'
import HomeButton from './buttons/home'
import OtherPeopleContainer from '../containers/otherPeopleContainer'
import PageNameContainer from '../containers/pageNameContainer'
import PostToWallContainer from '../containers/postToWallContainer'
import WallContainer from '../containers/wallContainer'

import { USER_ID } from '../constants/constants'

class Layout extends Component {
	constructor(props) {
		super(props); // friendsById, isFriend, viewProfile()
	}

	componentDidUpdate() {
		const { friendsById, viewProfile } = this.props;
		const id = parseInt(this.props.params.id);

		// dispatch
		viewProfile(id, USER_ID, friendsById); // currentId always is USER=0 for now
	}

	// shouldComponentUpdate() {
	// }

	render() {
		const { isFriend } = this.props;

	    return (
	      <div> 
	      	<PageNameContainer />
	      	<HomeButton /><br/>
	      	<AddFriendButtonContainer isFriend={isFriend} />
	        <FriendListContainer isFriend={isFriend} />
	        <WallContainer isFriend={isFriend} /><br/>
	        <PostToWallContainer isFriend={isFriend} />
	        <OtherPeopleContainer isFriend={isFriend} />
	      </div>
	    )
	}
}

Layout.propTypes = {
	friendsById: PropTypes.array.isRequired,
	isFriend: PropTypes.bool.isRequired,
	viewProfile: PropTypes.func.isRequired
}

export default Layout