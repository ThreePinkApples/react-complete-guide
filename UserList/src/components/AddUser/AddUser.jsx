import { useRef, useState } from "react";
import ErrorDialog from "../ErrorDialog/ErrorDialog";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const clearError = () => {
    setError("");
  };

  const addUser = (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (username === "" || age === "") {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
        onConfirm: clearError,
      });
      return;
    } else if (parseInt(age) <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
        onConfirm: clearError,
      });
      return;
    }
    props.addUser({ username: username, age: parseInt(age) });
    clearInput();
  };

  const clearInput = () => {
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorDialog
          title={error.title}
          message={error.message}
          onConfirm={error.onConfirm}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameInputRef} />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit" label="Add User" />
        </form>
      </Card>
    </>
  );
}
