import { useContext } from "react";
import MyContext from "../../Store/MyContext";
import classes from "./CartList.module.css";
import CartListItem from "./CartListItem";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const CartList = () => {
  const myCtx = useContext(MyContext);

  const closeButtonHandler = () => {
    myCtx.showCartItemHandler(false);
  };

  const orderButtonHandler = () => {};

  return (
    <Modal>
      {myCtx.cartItem.length===0 && <h3>Candies not found! please add candies</h3>}
      <div className={classes["cart-items"]}>
        {myCtx.cartItem.map((item) => (
          <CartListItem data={item} />
        ))}
      </div>
      <div className={classes["total-price"]}>
        <h2>Total Price</h2>
        <h2>${myCtx.totalPrice}</h2>
      </div>
      <div className={classes.actions}>
        <Button
          type="button"
          label="Close"
          className="close"
          onClickBtn={closeButtonHandler}
        />
        {myCtx.cartItem.length!==0 &&<Button
          type="button"
          label="Order"
          className="order"
          onClickBtn={orderButtonHandler}
        />}
      </div>
    </Modal>
  );
};

export default CartList;
