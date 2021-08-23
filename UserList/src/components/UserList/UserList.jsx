import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  const users = props.users;
  if (!users || users.length === 0) {
      return null;
  }
  return (
    <Card>
      <ul className={styles["user-list"]}>
        {users.map((user) => (
            <li>
              {user.username} ({user.age} years old)
            </li>
          ))}
      </ul>
    </Card>
  );
}
