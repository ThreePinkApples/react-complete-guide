import { useState } from "react";

export default function useInput(validateInputFunc, defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);

  console.log(validateInputFunc);
  const isValid = validateInputFunc(value);
  const hasError = isTouched && !isValid;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue(defaultValue);
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    onChange,
    onBlur,
    reset,
  };
}
