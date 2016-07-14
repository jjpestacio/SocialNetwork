import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

// Components
import InputForm from '../forms/inputForm'

// Actions
import { fetchData } from '../../actions/index'

class SearchBar extends Component {
	constructor(props) {
		super(props); // namesById, fetchData()

		// Functions
		this.search = this.search.bind(this);
	}

	search(profileName) {
		const { fetchData, namesById } = this.props;

		const profile = namesById.filter( users => 
			profileName == users.name
		)

		if (profile.length != 1) { // Name does not exist
			console.log('Account does not exist')
			return
		}

		fetchData(profile[0].id);
		browserHistory.push('/' + profile[0].id);
	}

	render() {
		return (
			<div>
				<h4>Search</h4>
				<InputForm placeHolder="Type a profile here ..."
					text="Search" submit={this.search} />
			</div>
		)
	}
}

const mapStateToProps = ( state ) => {
	const { namesById } = state;

	return {
		namesById
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		fetchData: ( id ) =>
			dispatch(fetchData(id))
	}
}

SearchBar.PropTypes = {
	fetchData: PropTypes.func.isRequired,
	namesById: PropTypes.string.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar)