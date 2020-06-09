import React from "react";
import ContactProvider from "./ContactProvider";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

function App() {
  return (
    <ContactProvider>
      <section id="contact-list">
        <h1>Contact Management</h1>
        <ContactForm></ContactForm>
        <ContactList></ContactList>
      </section>
    </ContactProvider>
  );
}

export default App;
