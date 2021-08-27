import validator from "validator";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    onChange: onFirstNameChange,
    onBlur: onFirstNameBlur,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    onChange: onLastNameChange,
    onBlur: onLastNameBlur,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail,
  } = useInput(validator.isEmail);

  const formIsValid = emailIsValid && lastNameIsValid && firstNameIsValid;

  function submitForm(event) {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetEmail();
    resetLastName();
  }

  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError ? "invalid" : ""}`}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={onFirstNameChange}
            onBlur={onFirstNameBlur}
          />
          {firstNameHasError && <p className="error-text">First name can not be empty</p>}
        </div>
        <div className={`form-control ${lastNameHasError ? "invalid" : ""}`}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={onLastNameChange}
            onBlur={onLastNameBlur}
          />
          {lastNameHasError && <p className="error-text">Last name can not be empty</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {emailHasError && <p className="error-text">Please enter a valid E-mail</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
