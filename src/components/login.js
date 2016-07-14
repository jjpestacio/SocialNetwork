import React, { Component } from 'react'
import { browserHistory } from 'react-router'

// Components
import InputForm from './forms/inputForm'

class Login extends Component {
	constructor(props) {
		super(props); // createAccount(), namesById, 
					// nextFreeId, fetchData(), setUser()

		// Function
		this.createAccount = this.createAccount.bind(this);
		this.login = this.login.bind(this);
	}

	createAccount(username) {
		const { createAccount, namesById, nextFreeId, setUser } = this.props;

		if (namesById.filter( users => username == users.name ).length != 0) {
			alert('Username is already taken, try a different one')
			return
		}

		createAccount(nextFreeId, username);
	}

	login(username) {
		const { namesById, fetchData, setUser } = this.props;

		const user = namesById.filter( users => 
			username == users.name
		)
		
		if (user.length != 1) {// Name does not exist
			alert('Account does not exist')
			return
		}

		setUser(user[0].id, user[0].name);
		fetchData(user[0].id);
		browserHistory.push('/' + user[0].id);
	}

	render() {
		return(
			<div>
				<h2>Login</h2>
				<InputForm placeHolder="Type a username ..." text="Login" 
					submit={this.login} />

				<h2>Create an Account</h2>
				<InputForm placeHolder="Type a username here!" text="Create Account" 
					submit={this.createAccount} />
			</div>
		)
	}
}

export default Login