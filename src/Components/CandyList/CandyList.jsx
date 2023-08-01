import React, { useContext } from "react";
import classes from "./CandyList.module.css";
import MyContext from "../../Store/MyContext";
import CandyListItem from "./CandyListItem";

const CandyList = (props) => {
  const myCtx = useContext(MyContext);

  return (
    <React.Fragment>
      <ul className={classes["candy-list"]}>
        <h2 className={classes.title}>Candies List</h2>
        {myCtx.formData.length === 0 && (
          <h3>Candies not found!! Please add candies</h3>
        )}
        <div className={classes["candy-list-items"]}>
          {myCtx.formData.map((data) => (
            <div key={data.id}>
              <CandyListItem data={data} />
            </div>
          ))}
        </div>
      </ul>
    </React.Fragment>
  );
};

export default CandyList;
