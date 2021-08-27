import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = nameTouched && name.trim() !== "";
  const showError = nameTouched && !nameIsValid;
  const formIsValid = nameIsValid;

  function onNameChange(event) {
    setNameTouched(true);
    setName(event.target.value);
  }

  function onNameBlur(event) {
    setNameTouched(true);
  }

  function submitForm(event) {
    event.preventDefault();
    setNameTouched(true);
    if (!formIsValid) {
      return;
    }
    setName("");
    setNameTouched(false);
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
        />
        {showError && <p className="error-text">Name must not be empty</p>}
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
