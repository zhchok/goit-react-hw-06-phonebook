import { useEffect } from "react";
import { GlobalStyle } from "./Base/GlobalStyle";
import { Box } from "./Box/box";
import { PhonebookForm } from "./Form/Form";
import { ContactsList } from "./Contacts/Contacts";
import { nanoid } from "nanoid";
import { SearchBox } from "./SearchBox/SearchBox";
import { useState } from "react";

export function App() {
	const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("contacts")) ?? []);
	const [filter, setFilter] = useState("");
	console.log(contacts);

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const addContact = (name, number) => {
		const contact = {
			id: nanoid(),
			name,
			number,
		};

		if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
			alert(`${name} is already in contacts.`);
			return;
		}

		setContacts(prevState => [contact, ...prevState]);
	};

	const deleteContact = contactId => {
		setContacts(contacts.filter(({ id }) => id !== contactId));
	};

	const changeFilter = e => {
		setFilter(e.currentTarget.value);
	};

	const normalizedFilter = filter.toLocaleLowerCase();
	const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

	return (
		<Box textAlign="center" margin="0 auto" width="500px">
			<GlobalStyle />

			<PhonebookForm onSubmit={addContact} />

			<>
				<SearchBox value={filter} onChange={changeFilter} />
				<ContactsList contacts={filtredContacts} onDeleteContact={deleteContact}></ContactsList>
			</>

			<Box mt={4}>
				<p>You dont have contacts, add your first contact 😉</p>
			</Box>
		</Box>
	);
}
