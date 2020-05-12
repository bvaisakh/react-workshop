import React, { useState } from "react";
import ContactList from "./ContactList.js";
import { v4 as uuid } from "uuid";
import data from "./data/contacts.json";
import ContactForm from "./ContactForm.js";

function App() {
  const [contacts, setContacts] = useState(data);

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    console.log(newContacts);
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
    <section id="contact-list">
      <h1>Contact Management</h1>
      <ContactForm addContact={addContact}></ContactForm>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
      ></ContactList>
    </section>
  );
}

export default App;
