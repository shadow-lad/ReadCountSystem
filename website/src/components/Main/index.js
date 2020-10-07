import React, { Component } from "react";
import { actions } from "react-redux-form";
import { loginUser } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import Auth from "../Auth";

const mapStateToProps = state => ({
		loginDetails: state.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
	resetLoginForm: () => {dispatch(actions.reset("login"));},
	loginUser: (username, password) => {dispatch(loginUser(username, password));}
});

class Main extends Component {

	render() {
		const AuthPage = () => (
				<Auth />
		);

		return (
			<Switch>
				<Route exact path = "/auth" component= {AuthPage}/>
				<Redirect to="/auth"/>
			</Switch>
		)

	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

