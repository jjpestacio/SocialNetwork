import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

// Actions
import { setUser } from '../../actions/index'

class LogOutButton extends Component {
	constructor(props) {
		super(props); // setUser()
		
		// Functions
		this.logOut = this.logOut.bind(this);
	}

	logOut() {
		browserHistory.push('/');
		setUser(-1, null);
	}

	render() {
		return (
			<button type="button" onClick={this.logOut}>LOG OUT</button>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		setUser: ( id, name ) => 
			dispatch(setUser(id, name))
	}
}

LogOutButton.propTypes = {
	setUser: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
    mapDispatchToProps
)(LogOutButton)
