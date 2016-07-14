faimport React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const PageName = ({ name }) => (
	<h2><b><i>{name}'s Profile</i></b></h2>
)

const mapStateToProps = ( state ) => {
	return {
		name: state.name
	}
}

PageName.propTypes = {
	name: PropTypes.string.isRequired
}

export default connect(
	mapStateToProps
)(PageName)