import React from "react";
import classes from "./App.module.css";
import CandyList from "./Components/CandyList/CandyList";
import CartList from "./Components/Cart.jsx/CartList";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.main}>
        <Form />
        <CandyList />
      </main>
      <CartList />
    </React.Fragment>
  );
};

export default App;
