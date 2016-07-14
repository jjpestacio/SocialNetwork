import { connect } from 'react-redux'

// Component to link to
import Login from '../components/login'

// Actions
import { createAccount, fetchData, setUser } from '../actions/index'

const mapStateToProps = ( state ) => {
	const { namesById } = state;

	return {
		namesById,
		nextFreeId: namesById.length
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return { 
		createAccount: ( id, username ) => 
			dispatch(createAccount(id, username)),

		fetchData: ( id ) =>
			dispatch(fetchData(id)),
			
		setUser: ( id, name ) =>
			dispatch(setUser(id, name))
	}
}

const LoginContainer = connect(
	mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer