import { connect } from 'react-redux'

// Component to link to
import FriendList from '../components/friends/friendList'

// Constants
import { FRIENDS } from '../constants/constants'

// Actions
import { viewProfile, removeFriend } from '../actions/index'

// Functions
import { splitPeople } from '../functions/index'

const mapStateToProps = ( state ) => {
	return {
		currentId: state.currentId,
		friends: splitPeople(state, FRIENDS)
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		viewProfile: ( id ) => {
			dispatch(viewProfile(id))
		},

		removeFriend: ( currentId, id ) => {
			dispatch(removeFriend(currentId, id))
		}
	}
}

const friendListContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(FriendList)

export default friendListContainer