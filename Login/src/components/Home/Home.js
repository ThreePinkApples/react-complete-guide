import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const Home = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
