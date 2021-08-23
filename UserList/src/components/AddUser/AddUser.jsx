import { useState } from "react";
import ErrorDialog from "../ErrorDialog/ErrorDialog";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState({});

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
    setError({});
  };

  const addUser = (event) => {
    event.preventDefault();
    if (username === "" || age === "") {
      setError({
        error: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
        actions: <Button onClick={clearError} label={"Okay"} />,
      });
      return;
    } else if (age <= 0) {
      setError({
        error: "Invalid input",
        message: "Please enter a valid age (> 0).",
        actions: <Button onClick={clearError} label={"Okay"} />,
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
      {error.error && (
        <ErrorDialog
        error={error.error}
        message={error.message}
          actions={error.actions}
        />
      )}
      <Card>
        <form>
          <div className={styles.input}>
            <label>Username</label>
            <input type="text" onChange={onUsernameChange} value={username} />
          </div>
          <div className={styles.input}>
            <label>Age (years)</label>
            <input type="number" onChange={onAgeChange} value={age} />
          </div>
          <div className={styles.input}>
            <Button type="submit" onClick={addUser} label={"Add User"} />
          </div>
        </form>
      </Card>
    </div>
  );
}
