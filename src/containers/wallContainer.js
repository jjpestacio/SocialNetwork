import { connect } from 'react-redux'
import Wall from '../components/wall/wall'

// Actions
import { removePost } from '../actions/index'

// Function
import { isFriend, isUserPage } from '../functions/index'

const mapStateToProps = ( state ) => {
	const { friends, id, userId, wall } = state;

	return {
		profileId: id,
		isUserPage: isUserPage(id, userId),
		wall	
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		removePost: ( profileId, id ) =>
			dispatch(removePost(profileId, id))
	}
}

const WallContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Wall)

export default WallContainer