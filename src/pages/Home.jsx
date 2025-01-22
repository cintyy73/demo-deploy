import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../context/Authcontext';
import {  getAllTodos } from '../sercices/todos';
import { Text } from '@chakra-ui/react';

 const Home = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { user } = useAuth();

	useEffect(() => {
        console.log(user)
		const getData = async () => {
			try {
				const data = await getAllTodos();
				setTodos(data);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, []);

	return (
		<div>
            <Text>Bienvenido {user?user: "a loguearse"}</Text>
			{error && <p>There was an error</p>}
			{loading && <p>Loading...</p>}
			{todos.map((todo) => (
				<div key={todo.id}>
					<p>{todo.name}</p>
				</div>
			))}
			{/* {!loading && !todos.length && <p>No todos</p>}
            */}
            {/* //mostrar bug  */}
            {!todos.length && <p>No todos</p>}
            
		</div>
	);
};

export default Home