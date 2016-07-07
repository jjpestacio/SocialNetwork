import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

class HomeButton extends Component {
	constructor(props) {
		super(props); // currentId
		this.goHome = this.goHome.bind(this);
	}

	goHome() {
		browserHistory.push('/0');
	}

	render() {
		return (
			<button type="button" onClick={this.goHome}>GO HOME</button>
		)
	}
}

HomeButton.propTypes = {}

export default HomeButton