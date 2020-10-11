import {
	upperCaseRegex,
	lowerCaseRegex,
	digitRegex,
	speicalCharaterRegex,
	alphanumericRegex,
} from "./constants";

export const upperCaseTest = (val) => upperCaseRegex.test(val);
export const lowerCaseTest = (val) => lowerCaseRegex.test(val);
export const digitTest = (val) => digitRegex.test(val);
export const specialCharacterTest = (val) => speicalCharaterRegex.test(val);
export const alphanumericTest = (val) => alphanumericRegex.test(val);
export const confirmPassword = (vals) => vals.password === vals.cpassword;
export const length = (min, max) => (val) =>
	val && val.length <= max && val.length >= min;
export const contains = (val) => val && val.length;
export const validCharacter = (val) => {
	if (!alphanumericTest(val)) {
		return ".?!#@$%^&*_-".includes(val);
	}
	return true;
};
export const characterTest = (val) => {
	for (var x of val) {
		if (!validCharacter(x)) {
			return false;
		}
	}
	return true;
};
