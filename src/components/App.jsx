import { useEffect, useState } from "react";

import { nanoid } from "nanoid";
import { Report } from "notiflix/build/notiflix-report-aio";

import { GlobalStyle } from "./Base/GlobalStyle";
import { Box } from "./Box/box";
import { ContactsList } from "./Contacts/Contacts";
import { PhonebookForm } from "./Form/Form";
import { SearchBox } from "./SearchBox/SearchBox";

export function App() {
	const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("contacts")) ?? []);
	const [filter, setFilter] = useState("");

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
		<Box as="main" fontFamily='"Walter Turncoat", cursive' textAlign="center" margin="0 auto" width="1200px">
			<GlobalStyle />

			<PhonebookForm onSubmit={addContact} />
			<SearchBox value={filter} onChange={changeFilter} />

			{contacts.length > 0 ? (
				<ContactsList contacts={filtredContacts} onDeleteContact={deleteContact}></ContactsList>
			) : (
				<Box as="p" mt={4}>
					You dont have contacts, add your first contact 😉
				</Box>
			)}
		</Box>
	);
}

// const value = useSelector(state => state.myValue);
// const dispatch = useDispatch();

/* <div>
	{value} <button onClick={() => dispatch(increment(1))}>increment</button>
	<button onClick={() => dispatch(decrement(1))}>decrement</button>
</div>; */
