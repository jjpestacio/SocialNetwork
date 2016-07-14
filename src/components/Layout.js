import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

// Components
import AddFriendButton from './buttons/addFriend'
import FriendListContainer from '../containers/friendListContainer'
import HomeButton from './buttons/home'
import LoginContainer from '../containers/loginContainer'
import LogOutButton from './buttons/logOut'
import OtherPeopleContainer from '../containers/otherPeopleContainer'
import PageName from './navbar/pageName'
import PostToWallContainer from '../containers/postToWallContainer'
import SearchBar from './navbar/searchBar'
import WallContainer from '../containers/wallContainer'

class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isFriend, isUserPage } = this.props;

	    return (
	    	<div className="page">
	    		<div className="navbar">
	    			<LogOutButton />
	    			<SearchBar />
	    			
		    		{ !isUserPage ? <HomeButton /> 
		    			: null }

	    			{ !isUserPage ? <PageName /> 
	    				: <h2>HOME</h2> }
	    		</div>
	    		<div className="body">
		    		{ !isFriend ? <AddFriendButton /> 
		    			: null}

		    		{ isFriend ? <FriendListContainer />
		    			: <h4>You must add this person to see their friend list</h4> }
		    		
		    		{ isFriend ? <WallContainer />
		    			: <h4>You must add this person to see their wall</h4> }
		    		
		    		{ isFriend ? <PostToWallContainer /> 
		    			: null }
		    
		    		{ isUserPage ? <OtherPeopleContainer /> 
	    			: null }
	    		</div>
	    	</div>
	    )
	}
}

Layout.propTypes = {
	isFriend: PropTypes.bool.isRequired,
	isUserPage: PropTypes.bool.isRequired
}

export default Layout