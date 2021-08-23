import { useState } from "react";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

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

  const addUser = (event) => {
      event.preventDefault();
      props.addUser({username: username, age: age});
      clearInput();
  }

  const clearInput = () => {
      setUsername("");
      setAge("");
  }

  return (
    <form>
      <div className={styles.input}>
        <label>Username</label>
        <input type="text" onChange={onUsernameChange} value={username} />
      </div>
      <div className={styles.input}>
        <label>Age (years)</label>
        <input type="number" onChange={onAgeChange} value={age} />
      </div>
      <button type="submit" onClick={addUser} >Add User</button>
    </form>
  );
}
