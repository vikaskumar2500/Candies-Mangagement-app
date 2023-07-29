import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        name={props.name}
        id={props.id}
        min={props.min}
        step={props.step}
      />
    </div>
  );
});

export default Input;
