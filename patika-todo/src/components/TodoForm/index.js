import { useState } from "react";

function TodoForm({ addTodo }) {
	const [title, setTitle] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!title.trim() || title.trim().length === 0) return;
		addTodo(title);
		setTitle("");
	}

	function handleChange(e) {
		setTitle(e.target.value);
	}

	return (
		<header className="header">
			<h1>todos</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="new-todo"
					type="text"
					placeholder="What needs to be done?"
					autoFocus
					autoComplete="off"
					value={title}
					onChange={handleChange}
				/>
			</form>
		</header>
	);
}

export default TodoForm;
