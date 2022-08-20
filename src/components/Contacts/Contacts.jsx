import { AiOutlineUserDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "redux/contactSlice";

import { Box } from "components/Box/box";

import { Button, Contact, Icon, Item, Text, Title } from "./Contacts.styled";

export function ContactsList({ contacts }) {
	const dispatch = useDispatch();

	return (
		<Box>
			<Title>Contacts</Title>
			<Box as="ul" m="0 auto" maxWidth="350px">
				{contacts.map(({ id, name, number }) => (
					<Item key={id}>
						<Contact>
							{name} : {number}
						</Contact>
						<Button type="button" onClick={() => dispatch(remove(id))}>
							<Text className="text">Delete</Text>
							<Icon className="icon">
								<AiOutlineUserDelete size="24px" fill="#eee" />
							</Icon>
						</Button>
					</Item>
				))}
			</Box>
		</Box>
	);
}
