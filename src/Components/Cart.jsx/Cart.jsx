import { useContext } from "react";
import classes from "./Cart.module.css";
import MyContext from "../../Store/MyContext";

const Cart = () => {
  const myCtx = useContext(MyContext);

  // console.log(myCtx);
  const totalItemCount = myCtx.cartItem.reduce(
    (total, item) => total + item.amount,
    0
  );

  const cartButtonHandler = () => {
    myCtx.showCartItemHandler(true);
  };

  return (
    <button type="button" className={classes.cart} onClick={cartButtonHandler}>
      <h3>Your Cart</h3>
      <div>{totalItemCount}</div> 
    </button>
  );
};

export default Cart;
