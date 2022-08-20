import { GlobalStyle } from "./Base/GlobalStyle";
import { Box } from "./Box/box";
import { ContactList } from "./Contacts/ContactList";
import { PhonebookForm } from "./Form/Form";
import { SearchBox } from "./SearchBox/SearchBox";

export function App() {
	return (
		<Box as="main" textAlign="center" margin="0 auto" width="1200px">
			<GlobalStyle />
			<PhonebookForm />
			<SearchBox />
			<ContactList />
		</Box>
	);
}
