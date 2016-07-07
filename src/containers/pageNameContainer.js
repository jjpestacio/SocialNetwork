import { connect } from 'react-redux'

// Constants
import { USER_ID } from '../constants/constants'

// Component to connect to
import PageName from '../components/pageName'

const mapStateToProps = ( state ) => {
	const { namesById, currentId } = state;
	let profileName = 'HOME PAGE'; // default is user page

	if (currentId !== USER_ID) // not home page
		profileName = namesById[currentId];

	return { 
		profileName
	}
}

const PageNameContainer = connect(
	mapStateToProps
)(PageName)

export default PageNameContainer