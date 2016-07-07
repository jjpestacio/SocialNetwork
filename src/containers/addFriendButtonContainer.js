import { connect } from 'react-redux'

// Component to link to
import AddFriendButton from '../components/buttons/addFriend'

// Actions
import { addFriend } from '../actions/index'

const mapStateToProps = ( state ) => {
	return {
		currentId: state.currentId
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		addFriend: ( currentId, id ) => {
			dispatch(addFriend(currentId, id))
		}
	}
}

const addFriendButtonContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(AddFriendButton)

export default addFriendButtonContainer