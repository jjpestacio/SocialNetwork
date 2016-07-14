import React, { Component, PropTypes } from 'react'

class InputForm extends Component {
	constructor(props) {
		super(props); // submit()
		this.state = { value: '' }

		// Functions
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		const { submit } = this.props;
		const { value } = this.state;
		
		submit(value);
		this.setState({ value: '' });
	}

	handleTextChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		const { value } = this.state;
		const { text, placeHolder } = this.props;

		return (
			<form>
				<input type="text" name="text" placeholder={placeHolder}
					value={value} onChange={this.handleTextChange} />
				<button type="button" onClick={this.handleSubmit}>{text}</button>
			</form>
		)
	}
}

InputForm.propTypes = {
	submit: PropTypes.func.isRequired,
	placeHolder: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default InputForm