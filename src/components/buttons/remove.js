import React, { Component, PropTypes } from 'react'

// Constants
import { USER_ID } from '../../constants/constants'

class RemoveButton extends Component {
	constructor(props) {
		super(props); // currentId, remove()
	}

	render() {
		const { currentId, remove } = this.props;

		if (currentId === USER_ID) { // USER page so show 'Remove' button
			return ( <button onClick={remove}>Remove</button> )
		} 

		else // other profile so don't show 'Remove' button
			return false 
	}
}

RemoveButton.propTypes = {
	currentId: PropTypes.number.isRequired,
	remove: PropTypes.func.isRequired
}

export default RemoveButton