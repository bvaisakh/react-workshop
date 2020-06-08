import React, { Component } from "react";
import ContactList from "./ContactList.js";
import data from "./data/contacts.json";

export default class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = { contacts: data };
		this.deleteContact = this.deleteContact.bind(this);
	}

	deleteContact(id) {
		const newContacts = this.state.contacts.filter(
			(contact) => contact.id !== id
		);
		this.setState({ contacts: newContacts });
	}

	render() {
		const contacts = this.state.contacts;
		return (
			<section id="contact-list">
				<h1>Contacts</h1>
				<ContactList
					contacts={contacts}
					deleteContact={this.deleteContact}
				></ContactList>
			</section>
		);
	}
}
