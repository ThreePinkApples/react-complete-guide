import { useState } from "react";

export default function useInput(validateValue, defaultValue) {
  const [value, setValue] = useState(defaultValue || "");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = isTouched && !isValid;

  function onChange(event) {
    setValue(event.target.value);
  }

  function onBlur(event) {
    setIsTouched(true);
  }

  function reset() {
      setIsTouched(false);
      setValue(defaultValue || "");
  }

  return {
    value,
    isValid,
    hasError,
    onChange,
    onBlur,
    reset
  };
}
