import { createStore, combineReducers, applyMiddleware } from "redux"
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialCredentials } from "./forms";
import { Login } from "./login";

export const ConfigureStore = () => {

	return createStore(
		combineReducers({
			loginStatus: Login,
			...createForms({
				login: InitialCredentials
			})
		}),
		applyMiddleware(thunk, logger)
	);


}