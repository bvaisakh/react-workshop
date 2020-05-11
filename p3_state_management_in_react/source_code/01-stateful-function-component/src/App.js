import React, { useState } from "react";
import ContactList from "./ContactList.js";
import data from "./data/contacts.json";

function App() {
  const [contacts] = useState(data);

  return (
    <section id="contact-list">
      <h1>Contacts</h1>
      <ContactList contacts={contacts}></ContactList>
    </section>
  );
}

export default App;
