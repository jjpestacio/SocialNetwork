import React, { Component, PropTypes } from 'react'

class InputForm extends Component {
	constructor(props) {
		super(props); // submitPost()
		this.state = { value: '' }

		// Functions
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		const { submitPost } = this.props;
		const { value } = this.state;
		
		submitPost(value);
		this.setState({ value: '' });
	}

	handleTextChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		const { value } = this.state;

		return (
			<form>
				<input type="text" name="text" placeholder="Write something here..." 
					value={value} onChange={this.handleTextChange} />
				<button type="button" onClick={this.handleSubmit}>Post</button>
			</form>
		)
	}
}

InputForm.propTypes = {
	submitPost: PropTypes.func.isRequired
}

export default InputForm