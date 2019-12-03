import React from "react";
import "./App.css";
import Store from "./Store";

import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Store>
        <Main />
      </Store>
    </div>
  );
};

export default App;
