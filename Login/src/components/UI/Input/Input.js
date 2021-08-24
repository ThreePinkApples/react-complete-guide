import styles from "./Input.module.css";

export default function Input(props) {
  const cssClasses = `${styles.control} ${
    props.isValid === false ? styles.invalid : ""
  }`;
  return (
    <div className={cssClasses}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
