import * as ActionTypes from "./actionTypes";
import { baseUrl } from "../shared/constants";

export const authenticate = (type, message) => ({
	type: type,
	payload: message
});

export const loginUser = (username, password) => async dispatch => {

	const user = {
		username: username,
		password: password
	};

	return fetch(baseUrl + "/auth/signin", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json"
		}
	}).then(response => {
		if (response.ok) {
			return response;
		} else {
			var error = new Error("Error" + response.status + ": " + response.message);
			error.response = response;
			throw error;
		}
	}, error => {
		var errMess = new Error(error.message);
		throw errMess;
	}).then(response => response.json())
	.then(response => dispatch(completeLogin(response)))
	.catch(error =>{
		console.log("loginUser ", error.message);
		alert("You could not be logged in\n Error " + error.status + ": " + error.message);
	})

};

export const completeLogin = (response) => {

	console.log("completeLogin parameter response = " + response);

	return {
		type: ActionTypes.LOGIN_SUCESSFUL,
		payload: response
	};

};