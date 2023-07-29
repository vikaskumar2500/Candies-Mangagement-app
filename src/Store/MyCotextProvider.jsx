import MyContext from "./MyContext";
import React, { useReducer } from "react";

const defaultCandy = {
  formData: [],
  cartItem: [],
  totalPrice: 0,
};

const candyReducer = (state, action) => {
  if (action.type === "ADD-FORM-DATA") {
    return {
      formData: [...state.formData, action.data],
    };
  } else if (action.type === "ADD-TO-CART") {
    // finding existing items?
    const cartItemIndex = state.cartItem.findIndex(
      (it) => it.id === action.item.id
    );
    console.log(cartItemIndex);
    if (cartItemIndex !== -1) {
      state.cartItem[cartItemIndex].amount += action.item.amount;
      return {
        cartItem: state.cartItem,
        totalPrice: (
          state.totalPrice +
          state.cartItem[cartItemIndex].price *
            state.cartItem[cartItemIndex].amount
        ).toFixed(2),
      };
    } else {
      return {
        cartItem: [...state.cartItem, action.item],
        totalPrice: (
          state.totalPrice +
          state.cartItem[cartItemIndex].price *
            state.cartItem[cartItemIndex].amount
        ).toFixed(2),
      };
    }
  } else if (action.type === "DELETE") {
    const cartItemIndex = state.cartItem.findIndex(
      (it) => it.id === action.item.id
    );
    return {
      cartItem: state.cartItem.filter((it) => it.id !== action.id),
      totalPrice:
        state.totalPrice.toFixed(2) -
        (
          state.cartItem[cartItemIndex].price *
          state.cartItem[cartItemIndex].amount
        ).toFixed(2),
    };
  } else return defaultCandy;
};

const MyContextProvider = (props) => {
  const [candyState, dispatchCandy] = useReducer(candyReducer, defaultCandy);

  const addFormDataHelper = (data) => {
    dispatchCandy({ type: "ADD-FORM-DATA", data: data });
  };

  const addCartitemHandler = (item) => {
    dispatchCandy({ type: "ADD-TO-CART", item: item });
  };

  const deleteCartItemHandler = (id) => {
    dispatchCandy({ type: "DELETE", id: id });
  };

  console.log(candyState.formData);
  return (
    <MyContext.Provider
      value={{
        formData: candyState.formData,
        addFormData: addFormDataHelper,
        cartItem: candyState.cartItem,
        totalPrice: candyState.totalPrice,
        addCartItem: addCartitemHandler,
        deleteCartItem: deleteCartItemHandler,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
