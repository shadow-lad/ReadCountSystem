import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

export default class PrivateRoute extends Component {
	render() {
		const { component: Component, loginDetails, ...rest } = this.props;

		console.log(rest);

		return (
			<Route
				{...rest}
				render={() =>
					loginDetails.jwtToken ? (
						<Component {...rest} />
					) : (
						<Redirect to="/auth" />
					)
				}
			/>
		);
	}
}
