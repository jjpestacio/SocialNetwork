import { connect } from 'react-redux'

// Component to connect to
import PostToWall from '../components/wall/postToWall'

// Actions
import { submitPost, removePost } from '../actions/index'

const mapStateToProps = (state) => {
	return {
		currentId: state.currentId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitPost: (currentId, post) => {
			dispatch(submitPost(currentId, post))
		},
	}
}

const PostToWallContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(PostToWall)

export default PostToWallContainer
