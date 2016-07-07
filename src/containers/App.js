import { connect } from 'react-redux'

// Component to connect to
import Layout from '../components/Layout'

// Actions
import { viewProfile } from '../actions/index'

const mapStateToProps = (state) => {
	return {
		isFriend: state.isFriend,
		currentId: state.currentId,
		friendsById: state.friendsById
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
