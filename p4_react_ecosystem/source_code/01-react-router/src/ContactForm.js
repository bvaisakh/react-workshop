import React from "react";
import { useHistory } from "react-router-dom";
import { useContactContext } from "./ContactProvider";
import { useInput } from "./hooks";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, updateName, resetName] = useInput("");
  const [email, updateEmail, resetEmail] = useInput("");

  const { addContact } = useContactContext();

  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();
    addContact(name, email);
    resetName();
    resetEmail();
    history.push('/');
  };

  return (
    <form onSubmit={submit} className="contact-form">
      <label htmlFor="email">Name:</label>
      <br></br>
      <input
        id="name"
        value={name}
        onChange={updateName}
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
        onChange={updateEmail}
        type="text"
        placeholder="email..."
        required
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default ContactForm;
