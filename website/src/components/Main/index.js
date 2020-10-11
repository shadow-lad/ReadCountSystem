import React, { Component } from "react";
import { loginUser, reset, signUpUser } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import Auth from "../Auth";

const mapStateToProps = (state) => ({
	loginDetails: state.loginDetails,
	signUpDetails: state.signUpDetails,
	formButton: state.formButton,
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (username, password) => {
		dispatch(loginUser(username, password));
	},
	signUpUser: (username, password) => {
		dispatch(signUpUser(username, password));
	},
	reset: () => {
		dispatch(reset());
	}
});

class Main extends Component {
	render() {
		const AuthPage = () =>
			this.props.loginDetails.jwtToken ? (
				<Redirect to="/" />
			) : (
				<Auth
					loginUser={this.props.loginUser}
					signUpUser={this.props.signUpUser}
					loginDetails={this.props.loginDetails}
					signUpDetails={this.props.signUpDetails}
					formButton={this.props.formButton}
					reset={this.props.reset}
				/>
			);

		const HomePage = () =>
			this.props.loginDetails.jwtToken ? (
				<h1>HomePage</h1>
			) : (
				<Redirect to="/auth" />
			);

			console.log("Main.js" + JSON.stringify(this.props));

		return (
			<Switch>
				<Route exact path="/auth" component={AuthPage} />
				<Route exact path="/" component={HomePage} />
				<Redirect to={this.props.loginDetails.jwtToken ? "/" : "/auth"} />
			</Switch>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
