import { props } from "bluebird";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </>
  );
}
