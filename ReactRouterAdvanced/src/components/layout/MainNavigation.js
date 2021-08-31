import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  const quotesIsActive = (_, location) => {
    return location && location.pathname === "/quotes";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Quotes quoted quotly</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              activeClassName={styles.active}
              isActive={quotesIsActive}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes/new" activeClassName={styles.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
