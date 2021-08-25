import styles from "./User.module.css";

const User = (props) => {
  return <li className={styles.user}>{props.name}</li>;
};

export default User;
