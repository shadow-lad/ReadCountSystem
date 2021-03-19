import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../Forms/LoginForm";
import SignUpForm from "../Forms/SignUpForm";
import Modal from "../Common/Modal";

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginForm: true,
		};
	}

	handleSignUp = (values) => {
		this.props.signUpUser(values.username, values.password);
	}

	handleLoginForm = () => {
		this.setState({
			...this.state,
			loginForm: true,
		});
	}

	handleSignUpForm = () => {
		this.setState({
			...this.state,
			loginForm: false,
		});
	}

	render() {
		const errorMessage =
			this.props.loginDetails.errMess || this.props.signUpDetails.errMess;

		console.log(this.props);

		const FormLogin = () => (
			<LoginForm
				formButton={this.props.formButton}
				loginUser={this.props.loginUser}
				cookies={this.props.cookies}
			/>
		);

		const FormSignUp = () => (
			<SignUpForm
				formButton={this.props.formButton}
				handleSignUp={this.handleSignUp}
			/>
		);

		const CurrentForm = () => {
			if (this.props.loginDetails.errMess) {
				if (!this.state.loginForm) {
					this.setState({
						...this.state,
						loginForm: true,
					});
				}
				return <FormLogin />;
			} else if (this.props.signUpDetails.errMess) {
				if (this.state.loginForm) {
					this.setState({
						...this.state,
						loginForm: false,
					});
				}
				return <FormSignUp />;
			} else {
				return this.state.loginForm ? <FormLogin /> : <FormSignUp />;
			}
		};

		const Page = () => (
			<>
				<div className="background"></div>
				<div className="background-overlay"></div>
				<div className="auth-container">
					<div className="form-container">
						<ul>
							<li
								className={this.state.loginForm ? "active" : ""}
								onClick={this.state.loginForm ? null : this.handleLoginForm}>
								Login
							</li>
							<li
								className={this.state.loginForm ? "" : "active"}
								onClick={this.state.loginForm ? this.handleSignUpForm : null}>
								SignUp
							</li>
						</ul>
						<CurrentForm />
					</div>
				</div>
				{errorMessage ? (
					<Modal
						title={"Couldn't process your request"}
						message={errorMessage}
						onDismiss={this.props.reset}
					/>
				) : null}
				{this.props.signUpDetails.message ? (
					<Modal
						title={"Success!"}
						message={this.props.signUpDetails.message}
						onDismiss={this.props.reset}
					/>
				) : null}
			</>
		);

		return this.props.loginDetails.jwtToken ? (
			<Redirect to="/stories" />
		) : (
			<Page />
		);
	}
}

export default Auth;
