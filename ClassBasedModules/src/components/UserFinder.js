import { Component } from "react";
import styles from "./UserFinder.module.css";
import Users from "./Users";
import UsersContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";

export default class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  render() {
    return (
      <>
        <div className={styles.finder}>
          <input type="search" onChange={this.search.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }

  search(event) {
    this.setState({ searchTerm: event.target.value.toLowerCase() });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm)
        ),
      });
    }
  }
}
