import * as ActionTypes from './actionTypes';

export const Login = (
	state = {
		jwtToken: null,
		isLoggedIn: false,
		errMess: null
	}, action) => {
		switch(action.type) {
			case ActionTypes.LOGIN_SUCESSFUL:
				return {...state, jwtToken: action.payload, isLoggedIn: true, errMess: null};
			case ActionTypes.LOGIN_FAILED:
				return {...state, jwtToken: null, isLoggedIn: false, errMes: action.payload};
			default:
				return state;
		}
};