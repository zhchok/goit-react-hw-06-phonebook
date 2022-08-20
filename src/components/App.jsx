import { useEffect } from "react";

import { nanoid } from "nanoid";
import { Report } from "notiflix/build/notiflix-report-aio";
import { useDispatch, useSelector } from "react-redux";
import { add, search } from "redux/contactSlice";

import { GlobalStyle } from "./Base/GlobalStyle";
import { Box } from "./Box/box";
import { ContactsList } from "./Contacts/Contacts";
import { PhonebookForm } from "./Form/Form";
import { SearchBox } from "./SearchBox/SearchBox";

export function App() {
	const contacts = useSelector(state => state.contacts.items);
	const filter = useSelector(state => state.contacts.filter);
	const dispatch = useDispatch();

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
			Report.failure(`${name} `, "Contact is already in contacts.");
			return;
		}

		dispatch(add(contact));
	};

	const changeFilter = e => {
		dispatch(search(e.currentTarget.value));
	};

	const normalizedFilter = filter.toLocaleLowerCase();
	const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

	return (
		<Box as="main" textAlign="center" margin="0 auto" width="1200px">
			<GlobalStyle />

			<PhonebookForm onSubmit={addContact} />
			<SearchBox value={filter} onChange={changeFilter} />

			{contacts.length > 0 ? (
				<ContactsList contacts={filtredContacts}></ContactsList>
			) : (
				<Box as="p" mt={4}>
					You dont have contacts, add your first contact 😉
				</Box>
			)}
		</Box>
	);
}
