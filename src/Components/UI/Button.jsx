import classes from "./Button.module.css";

const Button = (props) => {
  const candyClass = props.className;

  const submitButtonHandler = () => {
    props.onSubmit();
  };

  const clicButtonkHandler=()=> {
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
