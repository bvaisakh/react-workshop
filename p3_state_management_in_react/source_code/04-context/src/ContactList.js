import React, { useContext } from "react";
import "./ContactList.css";
import { contactContext } from "./index";

const ContactList = () => {
  const { contacts } = useContext(contactContext);

  return (
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
