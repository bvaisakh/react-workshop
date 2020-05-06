import React from "react";
import { render } from "react-dom";
import ContactList from "./components/ContactList.js";
import contacts from "./../data/contacts.js";

render(
  <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contacts={contacts}></ContactList>
  </section>,
  document.getElementById("react-container")
);
