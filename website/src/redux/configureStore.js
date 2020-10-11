import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FormButton } from "./formButton";
import { Login } from "./login";
import { SignUp } from "./signup";
// import logger from "redux-logger"; // Dev only

export const ConfigureStore = () => {
	return createStore(
		combineReducers({
			loginDetails: Login,
			signUpDetails: SignUp,
			formButton: FormButton,
		}),
		applyMiddleware(thunk)
	);
};
