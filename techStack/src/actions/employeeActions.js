import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: 'EMPLOYEE_UPDATE',
		payload: { prop, value },
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();
	console.log(name);
	return dispatch => {
		dispatch({ type: 'SET_LOADING', payload: true });
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: 'EMPLOYEE_CREATE', payload: { name, phone, shift } });
				Actions.employeeList({ type: 'reset' });
			});
	};
};
