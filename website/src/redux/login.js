import * as ActionTypes from "./actionTypes";

export const Login = (
	state = {
		jwtToken: null,
		errMess: null,
		username: null,
	},
	action
) => {
	console.log("received cookies", action.payload);
	switch (action.type) {
		case ActionTypes.LOGIN_SUCCESSFUL:
			return {
				...state,
				jwtToken: action.payload.token,
				errMess: null,
				username: action.payload.username
			};
		case ActionTypes.LOGIN_FAILED:
			return {
				...state,
				jwtToken: null,
				errMess: action.payload,
			};
		case ActionTypes.RESET:
			return {
				...state,
				errMess: null,
			};
		default:
			return state;
	}
};
