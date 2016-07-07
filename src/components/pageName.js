import React, { Component, PropTypes } from 'react'

const PageName = ({ profileName }) => (
	<h1>{profileName}</h1>
)

PageName.propTypes = {
	profileName: PropTypes.string.isRequired
}

export default PageName