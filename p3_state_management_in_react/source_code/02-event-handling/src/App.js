import React, { useState } from "react";
import ContactList from "./ContactList.js";
import data from "./data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(data);

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <section id="contact-list">
      <h1>Contacts</h1>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
      ></ContactList>
    </section>
  );
}

export default App;
