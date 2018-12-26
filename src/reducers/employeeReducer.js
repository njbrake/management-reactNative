const initialState = {};

export default (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'EMPLOYEES_FETCH_SUCCESS':
			return action.payload;
		default:
			return state;
	}
};
