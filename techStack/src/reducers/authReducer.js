const initialState = {
	email: '',
	password: '',
	loading: false,
	error: '',
	user: '',
};

export default (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'EMAIL_CHANGED':
			return { ...state, email: action.payload, error: '' };
		case 'PASSWORD_CHANGED':
			return { ...state, password: action.payload, error: '' };
		case 'LOGIN_USER_SUCCESS':
			return {
				...state,
				...initialState,
				user: action.payload,
			};
		case 'LOGIN_USER_FAILURE':
			return { ...state, error: action.payload.message, loading: false };
		case 'SET_LOADING':
			return { ...state, loading: action.payload };
		default:
			return state;
	}
};
