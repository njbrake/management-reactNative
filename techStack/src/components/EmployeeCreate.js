import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class EmployeeCreate extends React.Component {
	render() {
		return (
			<Card>
				<Text> EmployeeCreate</Text>
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

export default EmployeeCreate;
