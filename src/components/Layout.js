import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

// Components
import AddFriendButtonContainer from '../containers/addFriendButtonContainer'
import FriendListContainer from '../containers/friendListContainer'
import HomeButtonContainer from '../containers/homeButtonContainer'
import OtherPeopleContainer from '../containers/otherPeopleContainer'
import PageNameContainer from '../containers/pageNameContainer'
import PostToWallContainer from '../containers/postToWallContainer'
import WallContainer from '../containers/wallContainer'

class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isFriend, isUserPage } = this.props;

	    return (
	    	<div>
	    		{ !isUserPage ? <HomeButtonContainer /> : null }
	    		<PageNameContainer />
	    		{ !isFriend ? <AddFriendButtonContainer /> : null}
	    		{ isFriend ? <FriendListContainer />
	    			: <h4>You must add this person to see their friend list</h4> }
	    		{ isFriend ? <WallContainer />
	    			: <h4>You must add this person to see their wall</h4> }
	    		{ isFriend ? <PostToWallContainer /> : null }
	    		{ isUserPage ? <OtherPeopleContainer /> : null }
	    	</div>
	    )
	}
}

Layout.propTypes = {
	isFriend: PropTypes.bool.isRequired,
	isUserPage: PropTypes.bool.isRequired
}

export default Layout