import React, { createContext, useState } from "react";
import data from "./data/contacts.json";
import ContactList from "./ContactList.js";

export const ContactContext = createContext();

function App() {
  const [contacts, setContacts] = useState(data);
  
	const deleteContact = (id) => {
		const newContacts = contacts.filter((contact) => contact.id !== id);
		setContacts(newContacts);
	};

	return (
		<ContactContext.Provider value={{ contacts, deleteContact }}>
			<section id="contact-list">
				<h1>Contact Management</h1>
				<ContactList></ContactList>
			</section>
		</ContactContext.Provider>
	);
}

export default App;
