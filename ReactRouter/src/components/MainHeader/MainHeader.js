import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/products">
              Welcome
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}