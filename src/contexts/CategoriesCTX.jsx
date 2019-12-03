import React, { useReducer } from "react";

import { types } from "../types";

import categoriesReducer from "../reducers/categoriesReducer";

import Axios from "axios";

export const CategoriesCTX = React.createContext({});

const CategoriesCTXProvider = props => {
  const initialState = {
    categories: ["jim", "shang"],
    categoriesError: ""
  };

  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  // !Destructure state from reducer
  const { categories, categoriesError } = state;

  // ! Add new category action
  const addCategory = category => {
    dispatch({ type: types.ADD_CATEGORY, payload: category });
  };

  // ! Fetch categories from API
  const fetchCategories = async () => {
    try {
      const res = await Axios.get(`https://js-inventoryapp.com/categories`);

      dispatch({ type: types.GET_CATEGORIES, payload: res.data.data });
    } catch (err) {
      dispatch({ type: types.CATEGORIES_ERROR, payload: err });
    }
  };

  return (
    <CategoriesCTX.Provider
      value={{ categories, categoriesError, fetchCategories, addCategory }}
    >
      {props.children}
    </CategoriesCTX.Provider>
  );
};

export default CategoriesCTXProvider;
