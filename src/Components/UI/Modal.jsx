import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import MyContext from "../../Store/MyContext";

const Backdrop = (props) => {
  return <div className={props.showCart ? classes.backdrop : ""}></div>;
};

const ModalOverlay = (props) => {
  console.log(props);
  return <div className={classes["modal-overlay"]}>{props.children}</div>;
};

const Modal = (props) => {
  const myCtx = useContext(MyContext);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop showCart={myCtx.showCartItem} />,
        document.getElementById("backdrops")
      )}
      {myCtx.showCartItem &&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById("overlays")
        )}
    </React.Fragment>
  );
};

export default Modal;
