import Validator from "validator";
import isEmpty from "./is-empty.js";

const validateRegisterInput = (data) => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name cannot be blank";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateRegisterInput;

// function celsiusToFahrenheit(arrayOfNumbers) {
//   let degreeF = 0;
//   for (let i = 0; i < arrayOfNumbers.length; i++) arrayOfNumbers[i] * 1.8 + 32;
//   return arrayOfNumbers;
// }

const celsiusToFahrenheit = (arrayOfNumbers) =>
  arrayOfNumbers.map((x) => Math.round(x * 1.8 + 32));

let arrayOfNumbers = [26, 10, 0, 4, 3, 34, 5, 6, 23];
console.log(celsiusToFahrenheit(arrayOfNumbers));
