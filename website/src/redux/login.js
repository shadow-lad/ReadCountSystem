import * as ActionTypes from "./actionTypes";

export const Login = (
	state = {
		jwtToken: null,
		errMess: null,
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.LOGIN_SUCCESSFUL:
			return {
				...state,
				jwtToken: action.payload,
				errMess: null,
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
				jwtToken: null,
				errMess: null,
			};
		default:
			return state;
	}
};
