import { connect } from 'react-redux'
import Wall from '../components/wall/wall'

// Actions
import { removePost } from '../actions/index'

const mapStateToProps = ( state ) => {
	return {
		currentId: state.currentId,
		posts: state.wallsById[state.currentId]
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		removePost: ( currentId, id ) => {
			dispatch(removePost(currentId, id))
		}
	}
}

const WallContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Wall)

export default WallContainer