import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contains } from "../../shared/validation";

class LoginForm extends Component {

	render() {
		const validate = (values) => {
			const errors = {};
			if (!contains(values.username)) {
				errors.username = "Username cannot be empty";
			}

			if (!contains(values.password)) {
				errors.password = "Password cannot be empty";
			}

			return errors;
		};

		return (
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				validate={validate}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true);
					this.props.handleLogin(values);
				}}>
				{(formik) => (
					<Form>
						<div className="form-entry">
							<Field
								name="username"
								type="text"
								className="form-input"
								placeholder="Username"
							/>
							<ErrorMessage
								component="div"
								className="error-message"
								name="username"
							/>
						</div>
						<div className="form-entry">
							<Field
								name="password"
								type="password"
								className="form-input"
								placeholder="Password"
							/>
							<ErrorMessage
								name="password"
								component="div"
								className="error-message"
							/>
						</div>
						<Field
							type="submit"
							className="form-input"
							disabled={
								!(formik.isValid && formik.dirty) ||
								formik.isSubmitting ||
								this.props.formButton.disabled
							}
							value="login"
						/>
					</Form>
				)}
			</Formik>
		);
	}
}

export default LoginForm;
