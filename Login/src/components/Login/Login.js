import { useContext, useEffect, useReducer, useState } from "react";
import AuthContext from "../../context/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./Login.module.css";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

export default function Login(props) {
  const authContext = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, setEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, setPasswordState] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  useEffect(() => {
    setFormIsValid(emailState.isValid && passwordState.isValid);
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    setEmailState({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    setPasswordState({ type: "USER_INPUT", value: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input 
          type="email"
          id="email"
          label="E-Mail"
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
        />
        <Input 
          type="password"
          id="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}
