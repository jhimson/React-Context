import React, { useReducer } from "react";

import categoriesReducer from "../reducers/categoriesReducer";

export const CategoriesCTX = React.createContext({});

const CategoriesCTXProvider = props => {
  const [categoriesState, categoriesAction] = useReducer(categoriesReducer, {
    categories: ["jim", "shang"]
  });

  return (
    <CategoriesCTX.Provider value={{ categoriesState, categoriesAction }}>
      {props.children}
    </CategoriesCTX.Provider>
  );
};

export default CategoriesCTXProvider;
