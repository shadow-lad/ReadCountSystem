import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
    contains,
    length,
    alphanumericTest,
    upperCaseTest,
    lowerCaseTest,
    digitTest,
    specialCharacterTest,
    characterTest,
    confirmPassword,
} from "../../shared/validation";

const SignUpForm = ({handleSignUp, formButton}) => {
    const validation = (values) => {
        const errors = {};

        if (!contains(values.username)) {
            errors.username = "Username cannot be empty";
        } else if (!length(8, 16)(values.username)) {
            errors.username = "Must be 8 to 16 characters long";
        }

        if (!contains(values.password)) {
            errors.password = "Password cannot be empty";
        } else if (!length(8, 32)(values.password)) {
            errors.password = "Must be 8 to 32 characters long";
        } else if (!alphanumericTest(values.password)) {
            errors.password = "Must be alphanumeric (A-Z, a-z and 0-9)";
        } else if (!upperCaseTest(values.password)) {
            errors.password = "Must contain uppercase alphabets (A-Z)";
        } else if (!lowerCaseTest(values.password)) {
            errors.password = "Must contain lowercase alphabets (a-z)";
        } else if (!digitTest(values.password)) {
            errors.password = "Must contain numeric digits (0-9)";
        } else if (!specialCharacterTest(values.password)) {
            errors.password = "Must contain one of these special characters\n.?!#@$%^&*_-";
        } else if (!characterTest(values.password)) {
            errors.password = "Must only contain alphanumeric characters and\nthese special characters .?!#@$%^&*_-";
        }

        if (!contains(values.password)) {
            errors.cpassword = "Please enter a password";
        } else if (!contains(values.cpassword)) {
            errors.cpassword = "Please enter the above password again";
        } else if (!confirmPassword(values)) {
            errors.cpassword = "Passwords don't match";
        }

        return errors;
    };

    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
                cpassword: "",
            }}
            validate={validation}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                values.username = values.username.toLowerCase();
                handleSignUp(values);
            }}
        >
            {(formik) => (
                <Form>
                    <div className="form-entry">
                        <Field name="username" type="text" className="form-input username" placeholder="Username" />
                        <ErrorMessage component="div" className="error-message" name="username" />
                    </div>
                    <div className="form-entry">
                        <Field name="password" type="password" className="form-input" placeholder="Password" />
                        <ErrorMessage component="div" className="error-message" name="password" />
                    </div>
                    <div className="form-entry">
                        <Field name="cpassword" type="password" className="form-input" placeholder="Confirm Password" />
                        <ErrorMessage component="div" className="error-message" name="cpassword" />
                    </div>
                    <Field
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting || formButton.disabled}
                        className="form-input"
                        value="SIGN UP"
                    />
                </Form>
            )}
        </Formik>
    );
};

export default SignUpForm;
