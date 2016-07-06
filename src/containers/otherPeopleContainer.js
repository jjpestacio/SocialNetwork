import { connect } from 'react-redux'

// Component to link to
import OtherPeople from '../components/people/otherPeople'

// Constants
import { NONFRIENDS } from '../constants/constants'

// Actions
import { viewProfile, addFriend } from '../actions/index'

// Functions
import { splitPeople } from '../functions/index'

const mapStateToProps = (state) => {
	return {
		currentId: state.currentId,
		otherPeople: splitPeople(state, NONFRIENDS)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		viewProfile: (id) => {
			dispatch(viewProfile(id))
		},

		addFriend: (currentId, id) => {
			dispatch(addFriend(currentId, id))
		}
	}
}

const otherPeopleContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(OtherPeople)

export default otherPeopleContainer