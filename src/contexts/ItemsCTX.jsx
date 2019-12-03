import React, { useReducer } from "react";

import { types } from "../types";

import itemsReducer from "../reducers/itemsReducer";

export const ItemsCTX = React.createContext({});

const ItemsCTXProvider = props => {
  const initialState = {
    items: ["shoes", "shirt"]
  };

  const [state, dispatch] = useReducer(itemsReducer, initialState);

  // ! Destructure state from reducer
  const { items } = state;

  const addItem = item => {
    dispatch({ type: types.ADD_ITEM, payload: item });
  };

  return (
    <ItemsCTX.Provider value={{ items, addItem }}>
      {props.children}
    </ItemsCTX.Provider>
  );
};

export default ItemsCTXProvider;
