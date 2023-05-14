import React, { useRef, useImperativeHandle } from "react";
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <input className={`${classes.input} ${props.className}` }
      ref={inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    >{props.children}</input>
  );
});

export default Input;
