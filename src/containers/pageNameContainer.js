import { connect } from 'react-redux'

// Component to connect to
import PageName from '../components/pageName'

const mapStateToProps = ( state ) => {
	return {
		name: state.name
	}
}

const PageNameContainer = connect(
	mapStateToProps
)(PageName)

export default PageNameContainer