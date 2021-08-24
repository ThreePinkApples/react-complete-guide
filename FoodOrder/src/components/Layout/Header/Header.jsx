import mealsImage from "../../../assets/img/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>MealyWheely</h1>
        <HeaderCartButton openCart={props.openCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </>
  );
}
