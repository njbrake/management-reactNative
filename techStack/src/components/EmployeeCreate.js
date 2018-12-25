import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { employeeUpdate, employeeCreate } from '../actions/index';

class EmployeeCreate extends React.Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}
	render() {
		const { name, phone, shift, error } = this.props;
		const days = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		];
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						value={name}
						onChangeText={value =>
							this.props.employeeUpdate({ prop: 'name', value })
						}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Phone"
						placeholder="555 555 5555"
						value={phone}
						onChangeText={value =>
							this.props.employeeUpdate({ prop: 'phone', value })
						}
					/>
				</CardSection>
				<CardSection>
					<Text style={styles.pickerLabel}> Shift</Text>
					<Picker
						selected={this.props.shift}
						onValueChange={value =>
							this.props.employeeUpdate({ prop: 'shift', value })
						}
						style={{ flex: 2 }}
					>
						{days.map(day => {
							return <Picker.Item label={day} value={day} />;
						})}
					</Picker>
				</CardSection>

				<Text style={styles.error}> {error} </Text>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}> Create</Button>
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
	pickerContainer: {
		flexDirection: 'column',
	},
	pickerLabel: {
		fontSize: 18,
		paddingLeft: 20,
		textAlign: 'center',
	},
};

mapStateToProps = state => ({
	phone: state.employeeForm.phone,
	name: state.employeeForm.name,
	shift: state.employeeForm.shift,
	error: state.employeeForm.error,
});

export default connect(
	mapStateToProps,
	{ employeeUpdate, employeeCreate },
)(EmployeeCreate);
