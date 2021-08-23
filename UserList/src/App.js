import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers((prevState) => {
      return [...users, user];
    });
  };

  return (
    <div>
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}
