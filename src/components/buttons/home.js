import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

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

HomeButton.propTypes = {
	userId: PropTypes.number.isRequired,
	fetchData: PropTypes.func.isRequired
}

export default HomeButton