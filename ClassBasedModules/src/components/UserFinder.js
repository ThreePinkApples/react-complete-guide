import { Component } from "react";
import styles from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export default class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  render() {
    return (
      <>
        <div className={styles.finder}>
          <input type="search" onChange={this.search.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }

  search(event) {
    this.setState({ searchTerm: event.target.value.toLowerCase() });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm)
        ),
      });
    }
  }
}
