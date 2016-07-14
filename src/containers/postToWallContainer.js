import { connect } from 'react-redux'

// Component to connect to
import PostToWall from '../components/wall/postToWall'

// Actions
import { submitPost, removePost } from '../actions/index'

const mapStateToProps = ( state ) => {
	const { id, wall, username } = state;

	return {
		nextFreeId: wall.length,
		profileId: id,
		username
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		submitPost: ( profileId, post ) =>
			dispatch(submitPost(profileId, post))
	}
}

const PostToWallContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(PostToWall)

export default PostToWallContainer
