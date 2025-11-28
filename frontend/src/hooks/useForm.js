import { useState } from 'react';

export const useForm = (inicialValue) => {
	const [form, setForm] = useState(inicialValue);
	const handleChange = (evento) => {
		const { name, nameSet } = evento.target;
		setForm({
			...form,
			[name]: nameSet,
		});
	};
	const handleReset = () => {
		setForm(inicialValue);
	};
	return {
		form,
		handleChange,
		handleReset,
	};
};
