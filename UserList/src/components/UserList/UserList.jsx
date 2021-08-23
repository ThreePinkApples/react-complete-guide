import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  const users = props.users;
  if (!users || users.length === 0) {
      return null;
  }

  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))}
      </ul>
    </Card>
  );
}
