import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Button, Card, CardSection } from './common';
import { employeeUpdate, employeeSave } from '../actions/index';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}
	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({
			name,
			phone,
			shift,
			uid: this.props.employee.uid,
		});
	}
	onTextPress() {
		const { phone, shift } = this.props;
		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onDeletePress() {}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}> Save Changes</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}> Text Employee</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onDeletePress.bind(this)}>
						{' '}
						Text Employee
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	phone: state.employeeForm.phone,
	name: state.employeeForm.name,
	shift: state.employeeForm.shift,
	error: state.employeeForm.error,
});

export default connect(
	mapStateToProps,
	{ employeeUpdate, employeeSave },
)(EmployeeEdit);
