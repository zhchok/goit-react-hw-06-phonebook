import { useSelector } from "react-redux";

import { GlobalStyle } from "./Base/GlobalStyle";
import { Box } from "./Box/box";
import { ContactsList } from "./Contacts/Contacts";
import { PhonebookForm } from "./Form/Form";
import { SearchBox } from "./SearchBox/SearchBox";

export function App() {
	const contacts = useSelector(state => state.contacts.items);

	return (
		<Box as="main" textAlign="center" margin="0 auto" width="1200px">
			<GlobalStyle />
			<PhonebookForm />
			<SearchBox />
			{contacts.length > 0 ? (
				<ContactsList />
			) : (
				<Box as="p" mt={4}>
					You dont have contacts, add your first contact 😉
				</Box>
			)}
		</Box>
	);
}
