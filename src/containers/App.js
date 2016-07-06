import { connect } from 'react-redux'

// Component to connect to
import Layout from '../components/Layout'

// Actions
import { viewProfile } from '../actions/index'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		viewProfile: (id) => {
			dispatch(viewProfile(id))
		}
	}
}

const App = connect(
	mapStateToProps,
    mapDispatchToProps
)(Layout)

export default App
