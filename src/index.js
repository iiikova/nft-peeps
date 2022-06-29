import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [name, setName] = useState("Koval");

  return (
    <AppContext.Provider value={{ name }}>
      <SecComp />
    </AppContext.Provider>
  );
};

export const SecComp = () => {
  const { name } = useContext(AppContext);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
