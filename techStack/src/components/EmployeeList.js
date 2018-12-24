import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class EmployeeList extends React.Component {
	render() {
		return (
			<Card>
				<Text> EmployeeList</Text>
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

export default EmployeeList;
