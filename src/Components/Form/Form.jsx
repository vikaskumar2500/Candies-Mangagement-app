import { useRef, useContext } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../../Store/MyContext";

const Form = (props) => {
  const myCtx = useContext(MyContext);

  const enteredCandyNameRef = useRef();
  const enteredDescRef = useRef();
  const enteredPriceRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    myCtx.addFormData({
      id:uuidv4(),
      candyName:enteredCandyNameRef.current.value,
      candyDesc:enteredDescRef.current.value,
      price:Number(enteredPriceRef.current.value),
    })

    enteredCandyNameRef.current.value = '';
    enteredDescRef.current.value = '';
    enteredPriceRef.current.value = '';
  };

  const clickBtnHandler=()=> {}

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        type="text"
        id={uuidv4()}
        label="Candy Shop"
        name="candy-shop"
        ref={enteredCandyNameRef}
      />
      <Input
        type="text"
        id={uuidv4()}
        label="Description"
        name="description"
        ref={enteredDescRef}
      />
      <Input
        ref={enteredPriceRef}
        type="number"
        id={uuidv4()}
        label="Price"
        name="price"
        min={0.01}
        step={0.01}
      />
      <Button type="submit" label="Add Candy" className="add-candy" onClickBtn={clickBtnHandler} />
    </form>
  );
};

export default Form;
