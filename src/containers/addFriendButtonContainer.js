import { connect } from 'react-redux'

// Component to link to
import AddFriendButton from '../components/buttons/addFriend'

// Actions
import { addFriend } from '../actions/index'

const mapStateToProps = ( state ) => {
	const { id, userId } = state;

	return {
		id,
		userId
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		addFriend: ( profileId, id ) => {
			dispatch(addFriend(profileId, id))
		}
	}
}

const addFriendButtonContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(AddFriendButton)

export default addFriendButtonContainer