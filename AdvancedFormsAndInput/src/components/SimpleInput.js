import { useState } from "react";
import validator from "validator";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = nameTouched && name.trim() !== "";
  const showNameError = nameTouched && !nameIsValid;
  const emailIsValid = emailTouched && validator.isEmail(email);
  const showEmailError = emailTouched && !emailIsValid
  const formIsValid = nameIsValid && emailIsValid;

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onNameBlur(event) {
    setNameTouched(true);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onEmailBlur(event) {
    setEmailTouched(true);
  }

  function submitForm(event) {
    event.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);
    if (!formIsValid) {
      return;
    }
    setName("");
    setNameTouched(false);
  }

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control ${showNameError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        {showNameError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={`form-control ${showEmailError ? "invalid" : ""}`}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {showEmailError && <p className="error-text">Please enter a valid E-mail</p>}
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
