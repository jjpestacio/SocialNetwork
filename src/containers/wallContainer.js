import { connect } from 'react-redux'
import Wall from '../components/wall/wall'

const mapStateToProps = (state) => {
	return {
		posts: state.wall
	}
} 

const WallContainer = connect(
	mapStateToProps
)(Wall)

export default WallContainer
