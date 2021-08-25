import { Component } from "react";
import styles from "./User.module.css";

export default class User extends Component {
  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}
