import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

const baseApiUrl = "http://localhost:8080";

const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

const ContactProvider = ({ children }) => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		axios.get(`${baseApiUrl}/contact/`).then((res) => {
			setContacts(res.data);
		});
	}, []);

	const deleteContact = (contactid) => {
		axios.delete(`${baseApiUrl}/contact/${contactid}`).then(() => {
			axios
				.get(`${baseApiUrl}/contact/`)
				.then((res) => {
					setContacts(res.data);
				})
				.catch((error) => {
					console.error(error);
					alert("Something went wrong!");
				});
		});
	};

	const addContact = (name, phone, email) => {
		const contact = {
			name,
			email,
			phone,
		};

		axios
			.post(`${baseApiUrl}/contact/`, contact)
			.then((res) => {
				const newContact = res.data;
				const newContacts = [...contacts, newContact];
				setContacts(newContacts);
			})
			.catch((error) => {
				console.error(error);
				alert("Something went wrong!");
			});
	};

	return (
		<ContactContext.Provider value={{ contacts, deleteContact, addContact }}>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactProvider;
