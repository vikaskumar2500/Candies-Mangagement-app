import classes from "./Button.module.css";

const Button = (props) => {
  const candyClass = props.className;

  const submitButtonHandler = () => {
    // e.preventDefault();
    props.onSubmit();
  };

  const clicButtonkHandler=()=> {
    // e.preventDefault();
    props.onClickBtn();
  }


  return (
    <div className={classes.button}>
      <button
        type={props.type}
        className={classes[candyClass]}
        onSubmit={submitButtonHandler}
        onClick={clicButtonkHandler}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
