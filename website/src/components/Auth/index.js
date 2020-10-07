import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
import './index.scss';

class Auth extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			loginForm: true
		};

		this.handleLoginPage = this.handleLoginPage.bind(this);
		this.handleSignUpPage = this.handleSignUpPage.bind(this);
	}

	handleLoginPage() {

		console.log("Handle Login Called");

		this.setState({
			...this.state,
			loginForm: true
		});
	}

	handleSignUpPage() {

		console.log("Handle SignUp Called");

		this.setState({
			...this.state,
			loginForm: false
		});
	}

	render() {

		const LoginForm = () => (
			<Form model="login" onSubmit={this.handleSignUpPage}>
				<Control.text model=".username" id="username" name="username"
				placeholder="Username" className="input"/>
				<Control type="password" model=".password" id="password" name="password"
				placeholder="Password" className="input"/>
				<button type="submit" id="login-btn">Login</button>
			</Form>
		);

		const SignUpForm = () => (
			<Form model="signup" onSubmit={this.handleLoginPage}>
				<Control.text model=".username" id="username" name="username"
				placeholder="Username" className="input"/>
				<Control type="password" model=".password" id="password" name="password"
				placeholder="Password" className="input"/>
				<Control type="password" model=".password" id="confirm-password" name="password"
				placeholder="Confirm Password" className="input"/>
				<button type="submit" id="signup-btn">Sign Up</button>
			</Form>
		);

		
		return (
		<div className="auth-container">

			<div className="form-container">

				<ul>
					<li className={this.state.loginForm ? "active": ""}
						onClick={this.state.loginForm ? null : this.handleLoginPage}>Login</li>
					<li className={this.state.loginForm ? "": "active"}
						onClick={this.state.loginForm ? this.handleSignUpPage : null }>SignUp</li>
				</ul>

				{this.state.loginForm ? <LoginForm/> : <SignUpForm/>}

			</div>

		</div>
		);
	}
}

export default Auth;