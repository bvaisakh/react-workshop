import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ addContact = (f) => f }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (event) => {
    event.preventDefault();
    addContact(name, email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={submit} className="contact-form">
      <label htmlFor="email">Name:</label>
      <br></br>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="name..."
        required
      />
      <br></br>
      <label htmlFor="email">Email:</label>
      <br></br>
      <input
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="email..."
        required
      />
      <button className="add-button">
        Add
      </button>
    </form>
  );
};

export default ContactForm;
