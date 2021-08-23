import { useState } from "react";
import ErrorDialog from "../ErrorDialog/ErrorDialog";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onAgeChange = (event) => {
    if (event.target.value === "") {
      setAge("");
    } else {
      setAge(parseInt(event.target.value));
    }
  };

  const clearError = () => {
    setError("");
  };

  const addUser = (event) => {
    event.preventDefault();
    if (username === "" || age === "") {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
        onConfirm: clearError,
      });
      return;
    } else if (age <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
        onConfirm: clearError,
      });
      return;
    }
    props.addUser({ username: username, age: age });
    clearInput();
  };

  const clearInput = () => {
    setUsername("");
    setAge("");
  };

  return (
    <div>
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
          <input
            id="username"
            type="text"
            onChange={onUsernameChange}
            value={username}
          />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" onChange={onAgeChange} value={age} />
          <Button type="submit" label="Add User" />
        </form>
      </Card>
    </div>
  );
}
