import { Component } from "react";
import styles from "./User.module.css";

export default class User extends Component {
  componentDidMount() {
    console.log("I'M ALIVE");
  }

  componentWillUnmount() {
    console.log("I'M DYING");
  }

  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}
