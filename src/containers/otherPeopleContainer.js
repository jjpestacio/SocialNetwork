import { connect } from 'react-redux'

// Component to link to
import OtherPeople from '../components/people/otherPeople'

// Constants
import { NONFRIENDS } from '../constants/constants'

// Actions
import { addFriend, fetchData } from '../actions/index'

// Functions
import { isUserPage, splitPeople } from '../functions/index'

const mapStateToProps = ( state ) => {
	const { id, userId } = state;

	return {
		profileId: id,
		otherPeople: splitPeople(state, NONFRIENDS)
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		addFriend: ( profileId, id ) => 
			dispatch(addFriend(profileId, id)),

		fetchData: ( id ) => 
			dispatch(fetchData(id))
	}
}

const otherPeopleContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(OtherPeople)

export default otherPeopleContainer