import React from "react";

const ContactList = ({ contacts }) => {
	return (
		<table className="contacts-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map((contact, i) => (
					<tr key={i}>
						<td>{contact.name}</td>
						<td>{contact.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ContactList;
