
import { useState } from 'react';
import { useAuth } from '../context/Authcontext';
import { createTodo } from '../sercices/todos';

export const CreateTodo = () => {
	const [values, setValues] = useState({
		name: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { user } = useAuth()

	// console.log(user);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
            console.log(user, "user")
			const todo = await createTodo(values.name, user);
			console.log(todo);
		} catch (error) {
			setError(true);
            console.log(error)
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<h1>Create Todo</h1>
			<div>
				<input
					type="text"
					value={values.name}
					onChange={handleChange}
					name="name"
				/>
			</div>
			{error && <p>There was an error</p>}
			<button type="submit">{loading ? 'Creando...' : 'Crear Todo'}</button>
		</form>
	);
};
