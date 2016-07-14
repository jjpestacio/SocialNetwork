import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

// Actions
import { fetchData } from '../../actions/index'

class HomeButton extends Component {
	constructor(props) {
		super(props); // userId, fetchData

		// Functions
		this.goHome = this.goHome.bind(this);
	}

	goHome() {
		const { userId, fetchData } = this.props;
		
		browserHistory.push('/' + userId);
		fetchData(userId);
	}

	render() {
		return (
			<button type="button" onClick={this.goHome}>HOME</button>
		)
	}
}

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

HomeButton.propTypes = {
	userId: PropTypes.number.isRequired,
	fetchData: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
    mapDispatchToProps
)(HomeButton)
