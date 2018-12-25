import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends React.Component {
	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}
	render() {
		const { name } = this.props.employee;
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.text}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	text: {
		fontSize: 18,
		paddingLeft: 15,
	},
};

export default ListItem;
