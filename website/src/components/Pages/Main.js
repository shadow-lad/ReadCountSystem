import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { loadLoginCookies, loginUser, reset, signUpUser } from "../../redux/actionCreators";

import Auth from "./Auth";
import { withCookies } from "react-cookie";
import PostLogin from "../Route/PostLogin";
import PrivateRoute from "../Route/PrivateRoute";

const mapStateToProps = (state, ownProps) => ({
	loginDetails: state.loginDetails,
	signUpDetails: state.signUpDetails,
	formButton: state.formButton,
	cookies: ownProps.cookies,
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (username, password, cookies) => {
		dispatch(loginUser(username, password, cookies));
	},
	signUpUser: (username, password) => {
		dispatch(signUpUser(username, password));
	},
	reset: () => {
		dispatch(reset());
	},
	loadLoginCookies: (cookies) => {
		dispatch(loadLoginCookies(cookies))
	},
});

class Main extends Component {

	componentDidMount() {
		this.props.loadLoginCookies(this.props.cookies);
	}

	render() {
		const AuthPage = () => (
			<Auth
				loginUser={this.props.loginUser}
				signUpUser={this.props.signUpUser}
				loginDetails={this.props.loginDetails}
				signUpDetails={this.props.signUpDetails}
				formButton={this.props.formButton}
				reset={this.props.reset}
				cookies={this.props.cookies}
			/>
		);

		const PostLoginHandler = () => (
			<PostLogin loginDetails={this.props.loginDetails} />
		);

		console.log("Rendered Main");
		console.log(this.props.cookies.cookies);
		console.log(this.props.loginDetails);
		return (
			<Switch>
				<Route exact path="/auth" component={AuthPage} />
				<PrivateRoute path="/" component={PostLoginHandler} loginDetails={this.props.loginDetails} />
				<Redirect to="/" />
			</Switch>
		);
	}
}

export default withRouter(withCookies(connect(mapStateToProps, mapDispatchToProps)(Main))
);
