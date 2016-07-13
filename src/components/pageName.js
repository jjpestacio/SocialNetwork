import React, { Component, PropTypes } from 'react'

const PageName = ({ name }) => (
	<h1>{name}</h1>
)

PageName.propTypes = {
	name: PropTypes.string.isRequired
}

export default PageName