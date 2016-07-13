import { connect } from 'react-redux'

// Component to link to
import FriendList from '../components/friends/friendList'

// Constants
import { FRIENDS } from '../constants/constants'

// Actions
import { fetchData, viewProfile, removeFriend } from '../actions/index'

// Functions
import { isUserPage, splitPeople } from '../functions/index'

const mapStateToProps = ( state ) => {
	const { userId, id, friends } = state;

	return {
		profileId: id,
		friends: splitPeople(state, FRIENDS),
		isUserPage: isUserPage(id, userId)
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		removeFriend: ( profileId, id ) =>
			dispatch(removeFriend(profileId, id)),

		fetchData: (id) => 
			dispatch(fetchData(id))
	}
}

const friendListContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(FriendList)

export default friendListContainer