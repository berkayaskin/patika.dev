import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ allTodos, addTodo }) {
	const inputRef = useRef(null);

	const handleAddTodo = (event) => {
		if (inputRef.current.value !== "" && event.key === "Enter") {
			event.preventDefault();
			addTodo([
				...allTodos,
				{
					id: uuidv4(),
					title: inputRef.current.value,
					completed: false,
				},
			]);
			inputRef.current.value = "";
		}
	};

	return (
		<header className="header">
			<h1>todos</h1>
			<input
				className="new-todo"
				type="text"
				placeholder="What needs to be done?"
				autoFocus
				ref={inputRef}
				onKeyDown={(e) => handleAddTodo(e)}
			/>
		</header>
	);
}

export default TodoForm;
