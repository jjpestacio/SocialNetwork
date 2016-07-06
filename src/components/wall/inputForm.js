import React, { Component, PropTypes } from 'react'

// const InputForm = ({handleTextChange, handleSubmit}) => (
// 	<form>
// 		<input type="text" name="text" 
// 			placeholder="Write something here..." onChange={handleTextChange} />
// 		<button type="button" onClick={handleSubmit}>Post</button>
// 	</form>
// )


class InputForm extends Component {
	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {value: ''}
	}

	handleSubmit(e) {
		const { post } = this.props;
		
		post(this.state.value);
		this.setState({value: ''});
	}

	handleTextChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		return(
			<form>
				<input type="text" name="text" placeholder="Write something here..." 
					value={this.state.value} onChange={this.handleTextChange} />
				<button type="button" onClick={this.handleSubmit}>Post</button>
			</form>
		);
	}
}

InputForm.propTypes = {
	post: PropTypes.func.isRequired
}

export default InputForm