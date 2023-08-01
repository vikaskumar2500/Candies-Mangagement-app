import { useContext } from "react";
import Button from "../UI/Button";
import classes from "./CartListItem.module.css";
import MyContext from "../../Store/MyContext";

const CartListItem = (props) => {
  const { data } = props;
  const myCtx = useContext(MyContext);

  const decrButtonHandler = (id) => {
    myCtx.decrCartItem(id);
  };

  const incrButtonHandler = (id) => {
    myCtx.addCartItem({
      ...data,
      amount:1,
    });
  };

  return (
    <li key={data.id} className={classes["cart-list-item"]}>
      <div className={classes.name}>{data.name}</div>
      <div className={classes.about}>
        <div className={classes.price}>${data.price}</div>
        <h3>x{data.amount}</h3>
        <div className={classes.actions}>
          <Button
            type="button"
            label="-"
            className="action1"
            onClickBtn={decrButtonHandler.bind(null, data.id)}
          />
          <Button
            type="button"
            label="+"
            className="action2"
            onClickBtn={incrButtonHandler.bind(null, data.id)}
          />
        </div>
        {/* <Button type="button" label="delete" className="delete" /> */}
      </div>
    </li>
  );
};

export default CartListItem;
