import * as ActionTypes from "./actionTypes";

export const FormButton = (state = {
	disabled: false,
}, action) => {
	switch(action.type) {
		case ActionTypes.FORM_BUTTON_TOGGLE:
			return {
				...state,
				disabled: action.payload,
			};
		case ActionTypes.RESET:
			return {
				...state,
				disabled: false
			};
		default:
			return state;
	}
};

