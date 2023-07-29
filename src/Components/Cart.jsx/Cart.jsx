import { useContext } from "react";
import classes from "./Cart.module.css";
import MyContext from "../../Store/MyContext";

const Cart = () => {
  const myCtx = useContext(MyContext);

  console.log(myCtx);
  // const totalItemCount = myCtx.cartItem.reduce(
  //   (total, item) => total + item.amount,
  //   0
  // );

  const cartButtonHandler = () => {};

  return (
    <button type="button" className={classes.cart} onClick={cartButtonHandler}>
      <h3>Cart</h3>
      <div>{1}</div>
    </button>
  );
};

export default Cart;
