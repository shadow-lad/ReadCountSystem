import * as ActionTypes from "./actionTypes";
import { baseUrl } from "../shared/constants";

export const loginUser = (username, password) => async (dispatch) => {
	const user = {
		username: username,
		password: password,
	};

	dispatch(toggleFormButton(true));

	return fetch(baseUrl + "/auth/signin", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					return response.json().then((error)=>{
						console.log(error);
						throw new Error("Wrong username or password");
					});
				}
			},
			(error) => {
				var errMess = new Error(error);
				console.log("An error occured while logging in: " + error);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(result(ActionTypes.LOGIN_SUCCESSFUL, response.token)))
		.catch((error) => {
			dispatch(result(ActionTypes.LOGIN_FAILED, error.message));
		});
};

export const signUpUser = (username, password) => async (dispatch) => {
	const user = {
		username: username,
		password: password,
	};

	dispatch(toggleFormButton(true));

	return fetch(baseUrl + "/auth/signup", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					return response.json().then((error) => {
						error = JSON.parse(JSON.stringify(error));
						throw new Error(error.message);
					});
				}
			},
			(error) => {
				var errMess = new Error(error);
				console.log(error);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(result(ActionTypes.SIGNUP_SUCCESSFUL, response.message)))
		.catch((error) => {
			dispatch(result(ActionTypes.SIGNUP_FAILED, error.message));
		});
};

export const result = (type, payload) => {
	toggleFormButton(false);
	return {
		type: type,
		payload: payload,
	}
};

export const toggleFormButton = (disable) => {
	return {
		type: ActionTypes.FORM_BUTTON_TOGGLE,
		payload: disable,
	}
}

export const reset = () => {
	return {
		type: ActionTypes.RESET,
		payload: null,
	};
}
