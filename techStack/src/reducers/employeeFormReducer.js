const initialState = {
	name: '',
	phone: '',
	shift: '',
	error: '',
};

export default (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'EMPLOYEE_UPDATE':
			return {
				...state,
				[action.payload.prop]: action.payload.value,
				error: '',
			};
		case 'EMPLOYEE_CREATE':
			return { ...state, initialState };
		case 'EMPLOYEE_SAVE_SUCCESS':
			return { ...state, initialState };
		default:
			return state;
	}
};
