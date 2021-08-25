import { Component } from "react";
import User from "./User";
import styles from "./Users.module.css";

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
        {this.props.users.map((user) => (
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
