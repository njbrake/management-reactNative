import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from './common';
import { employeeUpdate, employeeCreate } from '../actions/index';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}> Create</Button>
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
	{ employeeUpdate, employeeCreate },
)(EmployeeCreate);
