import { useContext } from "react";
import Button from "../UI/Button";
import classes from "./CandyListItem.module.css";
import MyContext from "../../Store/MyContext";

const CandyListItem = (props) => {
  const { data } = props;
  console.log(data.desc);

  const myCtx = useContext(MyContext);

  const clickBtn1Handler = () => {
    myCtx.addCartItem({
      id: data.id,
      name: data.name,
      desc: data.desc,
      price: data.price,
      amount: 1,
    });
  };
  const clickBtn2Handler = () => {
    myCtx.addCartItem({
      id: data.id,
      name: data.name,
      desc: data.desc,
      price: data.price,
      amount: 2,
    });
  };
  const clickBtn3Handler = () => {
    myCtx.addCartItem({
      id: data.id,
      name: data.name,
      desc: data.desc,
      price: data.price,
      amount: 3,
    });
  };

  return (
    <li key={data.id} className={classes.list}>
      <div className={classes.about}>
        <div className={classes.name}>{data.name}</div>
        <div className={classes.desc}>{data.desc}</div>
        <div className={classes.price}>${data.price}</div>
      </div>
      <div className={classes.actions}>
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
      </div>
    </li>
  );
};

export default CandyListItem;
