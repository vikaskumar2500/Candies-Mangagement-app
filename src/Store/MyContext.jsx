import React from "react";

const MyContext = React.createContext({
  showCartItem: null,
  showCartItemHandler: () => {},
  formData: [],
  addFormData: () => {},
  cartItem: [],
  totalPrice: 0,
  addCartItem: () => {},
  deleteCartItem: () => {},
  decrCartItem: () => {},
});

export default MyContext;
