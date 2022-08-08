import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required(),
	number: yup.number().min(3).required(),
});

const initialValues = {
	name: "",
	number: "",
};

export const PhonebookForm = ({ onSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values.name, values.number);
		resetForm();
	};
	return (
		<Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
			<Form>
				<label>
					<span>Name</span>
					<Field type="text" name="name" />
					<ErrorMessage name="name" component="div" />
				</label>
				<label>
					<span>Number</span>
					<Field type="tel" name="number" />
					<ErrorMessage name="number" component="div" />
				</label>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
};
