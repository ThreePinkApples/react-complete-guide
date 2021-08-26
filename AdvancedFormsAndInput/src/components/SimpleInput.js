import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  function onNameChange(event) {
    setName(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    if (name.trim() === "") {
      setNameIsValid(false);
      console.log("No!");
      return;
    }
    setNameIsValid(true);
    console.log(name);
    console.log(nameRef.current.value);
  }

  return (
    <form onSubmit={submitForm}>
      <div className={`form-control ${!nameIsValid ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          ref={nameRef}
        />
        {!nameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
