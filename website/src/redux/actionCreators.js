import * as ActionTypes from "./actionTypes";
import { baseUrl } from "../shared/constants";

export const loginUser = (username, password, cookies) => async (dispatch) => {
	const user = {
		username: username,
		password: password,
	};

	dispatch(toggleFormButton(true));
	console.log("Request Sent to:", baseUrl);

	return fetch(baseUrl + "/auth/signin", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(
			(response) => {
				console.log("Response Received", response);
				if (response.ok) {
					return response;
				} else {
					return response.json().then((error) => {
						if (error.status === 401) {
							throw new Error("Wrong username or password");
						} else {
							throw new Error(
								"An error occurred when trying to log you in, please try again!"
							);
						}
					});
				}
			},
			(error) => {
				var errMess = new Error(error);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(saveLoginCookies(response, cookies)))
		.catch((error) => {
			dispatch(result(ActionTypes.LOGIN_FAILED, error.message));
		});
};

const saveLoginCookies = (payload, cookies) => {
	const details = JSON.parse(atob(payload.token.split(".")[1]));

	const expires = new Date(details.exp * 1000);

	console.log("Date:", expires);

	cookies.set("jwtToken", payload.token, { path: "/", expires: expires });
	cookies.set("username", payload.username, { path: "/", expires: expires });

	console.log(cookies.cookies);

	return result(ActionTypes.LOGIN_SUCCESSFUL, payload);
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
						error = JSON.parse(JSON.stringify(error)); // TODO: Remove before production
						throw new Error(error.message);
					});
				}
			},
			(error) => {
				var errMess = new Error(error);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((response) =>
			dispatch(result(ActionTypes.SIGNUP_SUCCESSFUL, response.message))
		)
		.catch((error) => {
			dispatch(result(ActionTypes.SIGNUP_FAILED, error.message));
		});
};

const result = (type, payload) => {
	toggleFormButton(false);
	return {
		type: type,
		payload: payload,
	};
};

export const toggleFormButton = (disable) => {
	return {
		type: ActionTypes.FORM_BUTTON_TOGGLE,
		payload: disable,
	};
};

export const reset = () => {
	return {
		type: ActionTypes.RESET,
		payload: null,
	};
};

export const loadLoginCookies = (cookies) => {
	console.log("In action creators: ", cookies);

	const token = cookies.get("jwtToken");
	const username = cookies.get("username");

	console.log("Loading Cookies: ", token);
	console.log("Loading Cookies", username);

	if (token && username) {
		const payload = {
			token: token,
			username: username,
		};
		console.log("returning cookies");
		return {
			type: ActionTypes.LOGIN_SUCCESSFUL,
			payload: payload,
		};
	} else {
		return {
			type: null,
		};
	}
};
