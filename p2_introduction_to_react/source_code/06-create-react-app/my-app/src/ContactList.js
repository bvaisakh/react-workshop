import React from "react";
import "./ContactList.css";

const ContactList = ({ contacts }) => {
  const onClickHandler = () => {
    contacts = [];
    console.log(contacts);
  };

  return (
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact, i) => (
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td onClick={onClickHandler}>
							CLEAR ALL CONTACTS
						</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
