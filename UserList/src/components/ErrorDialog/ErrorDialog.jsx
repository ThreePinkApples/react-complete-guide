import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./ErrorDialog.module.css";

export default function ErrorDialog(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title || "Test header"}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message || "I am a body"}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm} type="button" label="Okay"></Button>
        </footer>
      </Card>
    </div>
  );
}
