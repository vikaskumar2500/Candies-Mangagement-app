import React from "react";

const MyContext = React.createContext({
  formData: [],
  addFormData: () => {},
  cartItem:[],
  totalPrice:0,
  addCartItem:()=> {},
  deleteCartItem:()=> {}
});

export default MyContext;
