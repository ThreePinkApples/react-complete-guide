import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    const newUser = {
      ...user,
      id: Math.random()
    }
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  return (
    <>
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </>
  );
}
