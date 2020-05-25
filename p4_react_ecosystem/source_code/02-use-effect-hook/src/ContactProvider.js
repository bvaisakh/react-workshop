import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import data from "./data/contacts.json";
import { useContext } from "react";

const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(data);
  }, []);

  const deleteContact = (contactid) => {
    const newContacts = contacts.filter((contact) => contact.id !== contactid);
    setContacts(newContacts);
  };

  const addContact = (name, email) => {
    const newContact = {
      id: uuid(),
      name,
      email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <ContactContext.Provider value={{ contacts, deleteContact, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
