import { useContext } from "react";
import classes from "./CandyList.module.css";
import MyContext from "../../Store/MyContext";
import CandyListItem from "./CandyListItem";

const CandyList = (props) => {
  const myCtx = useContext(MyContext);

  return (
    <ul className={classes["candy-list"]}>
      {myCtx.formData.map((data) => (
        <>
          <CandyListItem data={data} />
          <hr />
        </>
      ))}
    </ul>
  );
};

export default CandyList;
