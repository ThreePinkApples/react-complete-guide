import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalBackdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
