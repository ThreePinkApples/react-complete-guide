export default function UserList(props) {
  const users = props.users;
  if (!users || users.length === 0) {
      return null;
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
            <li>
              {user.username} ({user.age} years old)
            </li>
          ))}
      </ul>
    </div>
  );
}
