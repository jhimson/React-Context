import React, { useReducer } from "react";

import itemsReducer from "../reducers/itemsReducer";

export const ItemsCTX = React.createContext({});

const ItemsCTXProvider = props => {
  const [itemsState, itemsAction] = useReducer(itemsReducer, {
    items: ["shoes", "shirt"]
  });

  return (
    <ItemsCTX.Provider value={{ itemsState, itemsAction }}>
      {props.children}
    </ItemsCTX.Provider>
  );
};

export default ItemsCTXProvider;
