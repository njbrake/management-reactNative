import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false,
	};
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser(email, password);
	}

	onLoginSuccess() {
		this.setState({ email: '', password: '', loading: false });
	}

	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}

	render() {
		const { error, email, password, loading } = this.props;
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="User@gmail.com"
						label="Email"
						onChangeText={this.onEmailChange.bind(this)}
						value={email}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="password"
						label="Password"
						onChangeText={this.onPasswordChange.bind(this)}
						secureTextEntry
						value={password}
					/>
				</CardSection>
				<Text style={styles.error}> {error}</Text>
				<CardSection>
					{loading ? (
						<Spinner />
					) : (
						<Button onPress={this.onButtonPress.bind(this)}> Log In </Button>
					)}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	error: {
		fontSize: 20,
		color: 'red',
		textAlign: 'center',
	},
};

const mapStateToProps = state => ({
	email: state.auth.email,
	password: state.auth.password,
	error: state.auth.error,
	loading: state.auth.loading,
});
export default connect(
	mapStateToProps,
	{ emailChanged, passwordChanged, loginUser },
)(LoginForm);
