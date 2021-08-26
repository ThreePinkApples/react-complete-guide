import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const showError = nameTouched && !nameIsValid;

  const isNameValid = (name) => name.trim() !== "";

  function onNameChange(event) {
    setNameTouched(true);
    setName(event.target.value);
    if (!nameIsValid && showError) {
      setNameIsValid(isNameValid(event.target.value));
    }
  }

  function onNameBlur(event) {
    setNameTouched(true);
    setNameIsValid(isNameValid(event.target.value));
  }

  function submitForm(event) {
    event.preventDefault();
    setNameTouched(true);
    if (!isNameValid(name)) {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
  }

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control ${showError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
          ref={nameRef}
        />
        {showError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
