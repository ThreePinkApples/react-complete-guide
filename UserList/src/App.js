import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import Wrapper from "./components/Helpers/Wrapper";
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
    <Wrapper>
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </Wrapper>
  );
}
