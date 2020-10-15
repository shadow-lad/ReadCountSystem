export const baseUrl =
	window.location.hostname === "localhost" ||
	window.location.hostname === "127.0.0.1" ||
	window.location.hostname === ""
		? "http://localhost:8080"
		: "https://rcs-shadow.herokuapp.com";
export const alphanumericRegex = /(?=.*?[A-Za-z0-9])/;
export const upperCaseRegex = /(?=.*?[A-Z])/;
export const lowerCaseRegex = /(?=.*?[a-z])/;
export const digitRegex = /(?=.*?[0-9])/;
export const speicalCharaterRegex = /(?=.*?[.?!#@$%^&*_-])/;
