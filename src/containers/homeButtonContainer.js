import { connect } from 'react-redux'

// Component to link to
import HomeButton from '../components/buttons/home'

// Actions
import { fetchData } from '../actions/index'

const mapStateToProps = ( state ) => {
	const { userId } = state;

	return {
		userId
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		fetchData: (id) => 
			dispatch(fetchData(id))
	}
}

const HomeButtonContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(HomeButton)

export default HomeButtonContainer