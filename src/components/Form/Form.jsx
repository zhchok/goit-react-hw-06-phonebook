import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Label, Input } from "./Form.styled";
import { Box } from "components/Box/box";

const schema = yup.object().shape({
	name: yup.string().required(),
	number: yup.number().min(3).required(),
});

export const PhonebookForm = ({ onSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values.name, values.number);
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
						<ErrorMessage name="name" component="div" />
					</Label>
					<Label>
						<span>Number</span>
						<Input type="tel" name="number" />
						<ErrorMessage name="number" component="div" />
					</Label>
					<button type="submit">Add contact</button>
				</Form>
			</Formik>
		</Box>
	);
};
