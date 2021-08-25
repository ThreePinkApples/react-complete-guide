import { Component } from "react";
import User from "./User";
import styles from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.users}>
        <button onClick={this.toggleUsers}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }

  toggleUsers() {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }
}
