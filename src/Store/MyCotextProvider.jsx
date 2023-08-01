import MyContext from "./MyContext";
import React, { useReducer, useState } from "react";

let defaultCandy = {
  formData: [
    
  ],
  cartItem: [],
  totalPrice: 0,
};

const candyReducer = (state, action) => {
  console.log(state.cartItem);
  if (action.type === "ADD-FORM-DATA") {
    return {
      formData: [action.data, ...state.formData],
      cartItem: state.cartItem,
      totalPrice: state.totalPrice,
    };
  } else if (action.type === "ADD-TO-CART") {
    // finding existing items?
    let cartItemIndex = state.cartItem.findIndex(
      (it) => it.id === action.item.id
    );
    if (cartItemIndex !== -1) {
      state.cartItem[cartItemIndex].amount += action.item.amount;
      return {
        formData: state.formData,
        cartItem: state.cartItem,
        totalPrice: state.totalPrice + action.item.price * action.item.amount,
      };
    } else {
      return {
        formData: state.formData,
        cartItem: [action.item, ...state.cartItem],
        totalPrice: state.totalPrice + action.item.price * action.item.amount,
      };
    }
  } else if (action.type === "DELETE") {
    let cartItemIndex = state.cartItem.findIndex(
      (it) => it.id === action.item.id
    );
    return {
      formData: state.formData,
      cartItem: state.cartItem.filter((it) => it.id !== action.id),
      totalPrice:
        state.totalPrice.toFixed(2) -
        (
          state.cartItem[cartItemIndex].price *
          state.cartItem[cartItemIndex].amount
        ).toFixed(2),
    };
  } else if (action.type === "DECREASE") {
    let cartItemIndex = state.cartItem.findIndex(
      (it) => it.id === action.id
    );
    if (state.cartItem[cartItemIndex].amount === 1) {
      return {
        formData: state.formData,
        cartItem: state.cartItem.filter((it) => it.id !== action.id),
        totalPrice:
          state.totalPrice.toFixed(2) -
          state.cartItem[cartItemIndex].price.toFixed(2),
      };
    } else {
      state.cartItem[cartItemIndex].amount -= 1;
      return {
        formData: state.formData,
        cartItem: state.cartItem,
        totalPrice:
          state.totalPrice.toFixed(2) -
          state.cartItem[cartItemIndex].price.toFixed(2),
      };
    }
  } else return defaultCandy;
};

const MyContextProvider = (props) => {
  const [candyState, dispatchCandy] = useReducer(candyReducer, defaultCandy);
  const [showCartItem, setShowCartItem] = useState(false);

  const addFormDataHelper = (data) => {
    dispatchCandy({ type: "ADD-FORM-DATA", data: data });
  };

  const addCartitemHandler = (item) => {
    dispatchCandy({ type: "ADD-TO-CART", item: item });
  };

  const deleteCartItemHandler = (id) => {
    dispatchCandy({ type: "DELETE", id: id });
  };

  const showCartItemHandler = (isTrue) => {
    setShowCartItem(isTrue);
  };

  const decrCartItemHandler = (id) => {
    dispatchCandy({ type: "DECREASE", id: id });
  };

  return (
    <MyContext.Provider
      value={{
        showCartItem: showCartItem,
        showCartItemHandler: showCartItemHandler,
        formData: candyState.formData,
        addFormData: addFormDataHelper,
        cartItem: candyState.cartItem,
        totalPrice: candyState.totalPrice,
        addCartItem: addCartitemHandler,
        deleteCartItem: deleteCartItemHandler,
        decrCartItem: decrCartItemHandler,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
