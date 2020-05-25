import React from "react";
import { useHistory } from "react-router-dom";
import { useContactContext } from "./ContactProvider";
import { useInput } from "./hooks";
import "./ContactForm.css";

const ContactForm = () => {
	const [name, updateName, resetName] = useInput("");
	const [phone, updatePhone, resetPhone] = useInput("");
	const [email, updateEmail, resetEmail] = useInput("");

	const { addContact } = useContactContext();

	const history = useHistory();

	const submit = (event) => {
		event.preventDefault();
		addContact(name, phone, email);
		resetName();
		resetPhone();
		resetEmail();
		history.push("/");
	};

	return (
		<>
			<h1>Add Contact</h1>
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
				<label htmlFor="phone">Phone:</label>
				<br></br>
				<input
					id="phone"
					value={phone}
					onChange={updatePhone}
					type="text"
					placeholder="phone number..."
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
				<br></br>
        <br></br>
				<button className="add-button">SUBMIT</button>
			</form>
		</>
	);
};

export default ContactForm;
