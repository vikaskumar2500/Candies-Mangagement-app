import { useContext } from "react";
import Button from "../UI/Button";
import classes from "./CandyListItem.module.css";
import MyContext from "../../Store/MyContext";

const CandyListItem = (props) => {
  const { data } = props;

  const myCtx = useContext(MyContext);

  const clickBtn1Handler = () => {
    myCtx.addCartItem({
      id: data.id,
      candyName: data.candyName,
      candyDesc: data.candyDesc,
      price: data.price,
      amount: 1,
    });
  };
  const clickBtn2Handler = () => {
    myCtx.addCartItem({
      id: data.id,
      candyName: data.candyName,
      candyDesc: data.candyDesc,
      price: data.price,
      amount: 2,
    });
  };
  const clickBtn3Handler = () => {
    myCtx.addCartItem({
      id: data.id,
      candyName: data.candyName,
      candyDesc: data.candyDesc,
      price: data.price,
      amount: 3,
    });
  };

  return (
    <li key={data.id} className={classes.list}>
      <div className={classes["candy-name"]}>{data.candyName}</div>
      <div className={classes["candy-desc"]}>{data.candyDesc}</div>
      <div className={classes.price}>{data.price}</div>
      <Button
        type="button"
        label="Buy1"
        className="Buy"
        onClickBtn={clickBtn1Handler}
      />
      <Button
        type="button"
        label="Buy2"
        className="Buy"
        onClickBtn={clickBtn2Handler}
      />
      <Button
        type="button"
        label="Buy3"
        className="Buy"
        onClickBtn={clickBtn3Handler}
      />
    </li>
  );
};

export default CandyListItem;
