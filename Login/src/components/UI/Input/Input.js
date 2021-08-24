import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: focus,
    };
  });

  const cssClasses = `${styles.control} ${
    props.isValid === false ? styles.invalid : ""
  }`;

  return (
    <div className={cssClasses}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;
