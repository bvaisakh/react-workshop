import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import "./ContactList.css";

const ContactList = ({ contacts, deleteContact = (f) => f }) => {
  return (
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>
              <FaMinusCircle
                className="action-icon"
                onClick={() => deleteContact(contact.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
