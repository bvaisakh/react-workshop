import React, { createContext, useState } from "react";
import data from "./data/contacts.json";
import { useContext } from "react";

const contactContext = createContext();
export const useContactContext = () => useContext(contactContext);

const ContactProvider = ({ children }) => {
  const [contacts] = useState(data);

  return (
    <contactContext.Provider value={{ contacts }}>
      {children}
    </contactContext.Provider>
  );
};

export default ContactProvider;
