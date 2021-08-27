import validator from "validator";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChange: onNameChange,
    onBlur: onNameBlur,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail,
  } = useInput(validator.isEmail);

  const formIsValid = nameIsValid && emailIsValid;

  function submitForm(event) {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetName();
    resetEmail();
  }

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control ${nameHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid E-mail</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
