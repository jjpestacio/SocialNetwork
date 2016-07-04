import { connect } from 'react-redux'
import FriendList from '../components/friends/friendList'

import { removeFriend, viewProfile } from '../actions/people'

const mapStateToProps = (state) => {
	return {
		friends: state.people.filter( person =>
			person.friend
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeFriend: (id) => {
			dispatch(removeFriend(id))
		},

		viewProfile: (id) => {
			dispatch(viewProfile(id))
		}
	}
}

const friendListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FriendList)

export default friendListContainer