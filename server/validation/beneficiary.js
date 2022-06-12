import Validator from "validator";
import isEmpty from "./is-empty.js";

const validateExperienceInput = (data) => {
  let errors = {};

  data.title = !isEmpty(data.firstName) ? data.firstName : "";
  data.company = !isEmpty(data.lastName) ? data.lastName : "";
  data.accountNumber = !isEmpty(data.accountNumber) ? data.accountNumber : "";
  data.bank = !isEmpty(data.bank) ? data.bank : "";

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
  }
  if (Validator.isEmpty(data.bank)) {
    errors.bank = "Bank name field is required";
  }
  if (Validator.isEmpty(data.accountNumber)) {
    errors.accountNumber = "Account number field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateExperienceInput;
