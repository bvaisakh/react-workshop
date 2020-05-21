import React from "react";
import ContactList from "./ContactList.js";
import contacts from "./data/contacts.js";

function App() {
  return (
    <section id="contact-list">
      <h1>Contacts</h1>
      <ContactList contacts={contacts}></ContactList>
    </section>
  );
}

export default App;
