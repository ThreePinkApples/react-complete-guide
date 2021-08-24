import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

export default function MainHeader() {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
}
