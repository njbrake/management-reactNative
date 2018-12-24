import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => {
	return {
		type: 'EMAIL_CHANGED',
		payload: text,
	};
};

export const passwordChanged = text => {
	return {
		type: 'PASSWORD_CHANGED',
		payload: text,
	};
};

export const loginUser = (email, password) => {
	return dispatch => {
		dispatch({ type: 'SET_LOADING', payload: true });
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				loginUserSuccess(dispatch, user);
			})
			.catch(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user => {
						loginUserSuccess(dispatch, user);
					})
					.catch(err => {
						dispatch({ type: 'LOGIN_USER_FAILURE', payload: err });
					});
			});
	};
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
	Actions.main();
};
