import React, { createContext, useState } from "react";
import data from "./data/contacts.json";
import ContactList from "./ContactList.js";

export const contactContext = createContext();

function App() {
  const [contacts, setContacts] = useState(data);
  
	const deleteContact = (id) => {
		const newContacts = contacts.filter((contact) => contact.id !== id);
		setContacts(newContacts);
	};

	return (
		<contactContext.Provider value={{ contacts, deleteContact }}>
			<section id="contact-list">
				<h1>Contact Management</h1>
				<ContactList></ContactList>
			</section>
		</contactContext.Provider>
	);
}

export default App;
