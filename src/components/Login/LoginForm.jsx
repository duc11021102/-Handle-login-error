import { useState } from "react";
import styled from './LoginForm.module.css';
import ErrorModal from "../UI/ErrorModal";
import PopUp from "../UI/PopUp";
import Button from "../UI/Button";


const LoginForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [messageEmail, isMessageEmail] = useState("");
  const [messagePassword, isMessagePassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Regex to validate email format
  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const EmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // When re-entering the email, the red error message will disappear
    setIsValidEmail(true);
  };

  const PasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // When re-entering the pass, the red error message will disappear
    setIsValidPassword(true);
  };
  //handle event after pressing login
  const onClickHandler = (event) => {
    event.preventDefault();
    // If the email field is empty, a red error is displayed to the user
    if (enteredEmail.trim().length === 0) {
      setIsValidEmail(false);
      isMessageEmail("Do not leave blank entries.");
    }
    // If the password field is empty, a red error is displayed to the user
    if (enteredPassword.trim().length === 0) {
      setIsValidPassword(false);
      isMessagePassword("Do not leave blank entries.");
    }
    // If the user enters the wrong email format, a red message will be displayed.
    if (
      isEmailValid(enteredEmail) === false &&
      enteredEmail.trim().length != 0
    ) {
      setIsValidEmail(false);
      isMessageEmail("Email must be filled in the correct format @gmail.com");
    }

    // data variable stores data after user input
    const data = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(data);

    // If the email and password are correct, the welcome popup will appear
    if (
      enteredEmail != "" &&
      isEmailValid(enteredEmail) === true &&
      enteredPassword != ""
    ) {
      setIsValid(true);
      console.log("success");
    }
    // returns blank password box after clicking login
    setEnteredPassword("");
  };

  // turn off the welcome popup when you press ok
  const onClosedHandler = () => {
    setIsValid(false);
  };
  // turn off link a
  const aHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className={styled.form}>
      {isValid && (
        <PopUp onClosed={onClosedHandler} email={enteredEmail}></PopUp>
      )}
      <form className={`${styled['login-form']}`}>
        <input
          className={isValidEmail ? "" : "error"}
          type="email"
          id="email"
          value={enteredEmail}
          placeholder="Email"
          onChange={EmailChangeHandler}
        />
        {!isValidEmail && <ErrorModal message={messageEmail}></ErrorModal>}
        <input
          className={isValidPassword ? "" : "error"}
          type="password"
          value={enteredPassword}
          placeholder="Password"
          onChange={PasswordChangeHandler}
        />
        {!isValidPassword && (
          <ErrorModal message={messagePassword}></ErrorModal>
        )}
        <Button onClick={onClickHandler}>login</Button>
        <p className={styled.message}>Not registered?</p>
        <a href="#" onClick={aHandler}>Create an account</a>
      </form>
    </div>
  );
};
export default LoginForm;
