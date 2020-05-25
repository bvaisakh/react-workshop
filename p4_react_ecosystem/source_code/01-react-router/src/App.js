import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactProvider from "./ContactProvider";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

function App() {
	return (
		<ContactProvider>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Contact List</Link>
							</li>
							<li>
								<Link to="/add">Add Contact</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/add">
							<ContactForm></ContactForm>
						</Route>
						<Route path="/">
							<ContactList></ContactList>
						</Route>
					</Switch>
				</div>
			</Router>
		</ContactProvider>
	);
}

export default App;
