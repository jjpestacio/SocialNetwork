import { connect } from 'react-redux'

// Component to connect to
import Layout from '../components/Layout'

// Actions
import { viewProfile } from '../actions/index'

// Functions
import { isFriend, isUserPage } from '../functions/index'

const mapStateToProps = (state) => {
	const { id, userId, friends } = state;
	
	return {
		profileId: id,
		isFriend: isFriend(friends, userId),
		isUserPage: isUserPage(id, userId),
		friends: friends
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		viewProfile: (id, currentId, friendsById) => {
			dispatch(viewProfile(id, currentId, friendsById))
		}
	}
}

const App = connect(
	mapStateToProps,
    mapDispatchToProps
)(Layout)

export default App
