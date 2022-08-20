import { ErrorMessage, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { useDispatch, useSelector } from "react-redux";
import { add } from "redux/contactSlice";
import * as yup from "yup";

import { Box } from "components/Box/box";

import { Input, Label } from "./Form.styled";

const schema = yup.object().shape({
	name: yup.string().required(),
	number: yup.number().min(3).required(),
});

export const PhonebookForm = () => {
	const contacts = useSelector(state => state.contacts.items);
	const dispatch = useDispatch();

	const handleSubmit = (values, { resetForm }) => {
		const contact = {
			id: nanoid(),
			name: values.name,
			number: values.number,
		};

		if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase())) {
			Report.failure(`${values.name} `, "Contact is already in contacts.");
			return;
		}

		dispatch(add(contact));
		resetForm();
	};

	return (
		<Box mb={4} pt={3}>
			<Formik
				initialValues={{
					name: "",
					number: "",
				}}
				validationSchema={schema}
				onSubmit={handleSubmit}
			>
				<Form>
					<Label>
						<span>Name</span>
						<Input type="text" name="name" />
						<ErrorMessage name="name" render={() => Notify.failure("Field name is required")} />
					</Label>
					<Label>
						<span>Number</span>
						<Input type="tel" name="number" />
						<ErrorMessage
							name="number"
							render={() => Notify.failure("Field number is required and must be contain only numbers")}
						/>
					</Label>
					<button type="submit">Add contact</button>
				</Form>
			</Formik>
		</Box>
	);
};
