import React, { useReducer } from "react";

import { types } from "../types";

import categoriesReducer from "../reducers/categoriesReducer";

export const CategoriesCTX = React.createContext({});

const CategoriesCTXProvider = props => {
  const initialState = {
    categories: ["jim", "shang"]
  };

  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  // !Destructure state from reducer
  const { categories } = state;

  const addCategory = category => {
    dispatch({ type: types.ADD_CATEGORY, payload: category });
  };

  return (
    <CategoriesCTX.Provider value={{ categories, addCategory }}>
      {props.children}
    </CategoriesCTX.Provider>
  );
};

export default CategoriesCTXProvider;
