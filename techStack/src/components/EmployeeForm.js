import React from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions/index';

class EmployeeForm extends React.Component {
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
			<View>
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
						selectedValue={shift}
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
			</View>
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

const mapStateToProps = state => ({
	phone: state.employeeForm.phone,
	name: state.employeeForm.name,
	shift: state.employeeForm.shift,
	error: state.employeeForm.error,
});

export default connect(
	mapStateToProps,
	{ employeeUpdate },
)(EmployeeForm);
