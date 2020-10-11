import * as ActionTypes from "./actionTypes";

export const SignUp = (
	state = {
		message: null,
		errMess: null
	},
	action
) => {
	switch(action.type) {
		case ActionTypes.SIGNUP_SUCCESSFUL:
			return {
				...state,
				message: action.payload,
				errMess:null
			};
		case ActionTypes.SIGNUP_FAILED:
			return {
				...state,
				message: null,
				errMess: action.payload,
			};
		case ActionTypes.RESET:
			return {
				...state,
				message: null,
				errMess: null,
			};
		default:
			return state;
	}
};