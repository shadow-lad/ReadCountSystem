import React, { Component } from "react";
import LoginForm from "../Forms/LoginForm";
import SignUpForm from "../Forms/SignUpForm";
import Modal from "../Modal";
import "./index.scss";

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginForm: true,
		};

		this.handleLoginPage = this.handleLoginPage.bind(this);
		this.handleSignUpPage = this.handleSignUpPage.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleLogin(values) {
		console.log("Logging in...");
		this.props.loginUser(values.username, values.password);
	}

	handleSignUp(values) {
		console.log("Signing Up...");
		this.props.signUpUser(values.username, values.password);
	}

	handleLoginPage() {
		console.log("Handle Login Called");

		this.setState({
			...this.state,
			loginForm: true,
		});
	}

	handleSignUpPage() {
		console.log("Handle SignUp Called");

		this.setState({
			...this.state,
			loginForm: false,
		});
	}

	render() {
		const errorMessage =
			this.props.loginDetails.errMess || this.props.signUpDetails.errMess;

		const FormLogin = () => (
			<LoginForm
				formButton={this.props.formButton}
				handleLogin={this.handleLogin}
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
				console.log("returned current form");
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

		console.log("Rendering Auth Page");

		const Page = () => (
			<>
				<div className="auth-container">
					<div className="form-container">
						<ul>
							<li
								className={this.state.loginForm ? "active" : ""}
								onClick={this.state.loginForm ? null : this.handleLoginPage}>
								Login
							</li>
							<li
								className={this.state.loginForm ? "" : "active"}
								onClick={this.state.loginForm ? this.handleSignUpPage : null}>
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
		return <Page />;
	}
}

export default Auth;
