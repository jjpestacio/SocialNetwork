import { connect } from 'react-redux'
import PeopleList from '../components/people/peopleList'

import { addFriend } from '../actions/people'

const mapStateToProps = (state) => {
	return {
		people: state.people.filter( person =>
			!person.friend
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addFriend: (id) => {
			dispatch(addFriend(id))
		}
	}
}

const peopleListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PeopleList)

export default peopleListContainer