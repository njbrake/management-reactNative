import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Button, Card, CardSection, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions/index';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
	state = {
		modalVisible: false,
	};
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

	onDeletePress() {
		this.setState({ modalVisible: true });
	}
	onAccept() {
		this.setState({ modalVisible: false });
		this.props.employeeDelete({ uid: this.props.employee.uid });
	}
	onDecline() {
		this.setState({ modalVisible: false });
	}
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
					<Button onPress={this.onDeletePress.bind(this)}>Fire Employee</Button>
				</CardSection>
				<Confirm
					visible={this.state.modalVisible}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to Fire this Employee?
				</Confirm>
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
	{ employeeUpdate, employeeSave, employeeDelete },
)(EmployeeEdit);
