const data = [
	{
		name: "Shinto Thomas",
		email: "sthomas@suyati.com",
	},
	{
		name: "Praphul",
		email: "pnangeelil@suyati.com",
	},
	{
		name: "Shamnad V A",
		email: "sabdul@suyati.com",
	},
];

const ContactList = ({ contacts }) => {
	return React.createElement(
		"table",
		{ className: "contacts-table" },
		React.createElement(
			"thead",
			null,
			React.createElement(
				"tr",
				null,
				React.createElement("th", null, "Name"),
				React.createElement("th", null, "Email")
			)
		),
		React.createElement(
			"tbody",
			null,
			contacts.map((contact, i) =>
				React.createElement(
					"tr",
					{ key: i },
					React.createElement("td", null, contact.name),
					React.createElement("td", null, contact.email)
				)
			)
		)
	);
};

const contactManagement = React.createElement(
	"section",
	{ id: "contact-list" },
	React.createElement("h1", null, "Contacts"),
	React.createElement(ContactList, { contacts: data }, null)
);

ReactDOM.render(contactManagement, document.getElementById("react-container"));
