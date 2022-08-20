import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { search } from "redux/contactSlice";

import { Box } from "components/Box/box";

import { InputSearch, SearchLabel, Text } from "./SearchBox.styled";

export function SearchBox() {
	const dispatch = useDispatch();
	const loginInputId = nanoid();
	const filter = useSelector(state => state.contacts.filter);

	const changeFilter = e => {
		dispatch(search(e.currentTarget.value));
	};

	return (
		<Box mb={4}>
			<Text>Find contacts by name</Text>
			<InputSearch
				name="contact"
				className="input-search"
				id={loginInputId}
				value={filter}
				type="text"
				onChange={changeFilter}
			/>
			<SearchLabel className="search" htmlFor={loginInputId}></SearchLabel>
		</Box>
	);
}
