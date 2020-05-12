import React from "react";
import ContactProvider from "./ContactProvider";
import ContactList from "./ContactList";

function App() {
  return (
    <ContactProvider>
      <section id="contact-list">
        <h1>Contact Management</h1>
        <ContactList></ContactList>
      </section>
    </ContactProvider>
  );
}

export default App;
