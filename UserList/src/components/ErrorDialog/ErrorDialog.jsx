import ReactDOM from "react-dom";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./ErrorDialog.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title || "Test header"}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message || "I am a body"}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm} type="button" label="Okay" />
      </footer>
    </Card>
  );
};

export default function ErrorDialog(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
