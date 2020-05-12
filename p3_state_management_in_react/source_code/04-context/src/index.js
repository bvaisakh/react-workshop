import React, { createContext } from "react";
import ReactDOM from "react-dom";
import contacts from "./data/contacts.json";
import "./index.css";
import App from "./App";

export const contactContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <contactContext.Provider value={{ contacts }}>
      <App />
    </contactContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
