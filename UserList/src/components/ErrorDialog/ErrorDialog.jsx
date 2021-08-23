import styles from "./ErrorDialog.module.css";

export default function ErrorDialog(props) {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.error || "Test header"}</h2>
        </div>
        <div className={styles.content}>
          <span>{props.message || "I am a body"}</span>
          <div className={styles.actions}>
            {props.actions || <button>Test button</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
