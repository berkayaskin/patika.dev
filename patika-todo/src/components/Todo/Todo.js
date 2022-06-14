import { useState, useRef, useEffect } from "react";

const ESCAPE_KEY = 27;

function Todo({
	id,
	title,
	completed,
	toggleCompleteTodo,
	deleteTodo,
	isEditing,
	setIsEditing,
	editTodo,
}) {
	const [newTitle, setNewTitle] = useState(title);
	const inputRef = useRef(null);

	function handleChange(e) {
		setNewTitle(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		editTodo(id, newTitle);
		setNewTitle(newTitle);
		setIsEditing(false);
	}

	function handleFocus(event) {
		event.target.select();
	}

	function handleCancel(event) {
		if (event.which === ESCAPE_KEY) {
			setNewTitle(title);
			setIsEditing(false);
		}
	}

	useEffect(() => {
		if (isEditing) {
			inputRef.current.focus();
		}
	}, [isEditing]);

	return (
		<li
			className={`${completed ? "completed" : ""} ${
				isEditing ? "editing" : ""
			}`}
			key={id}
		>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={completed}
					onChange={() => toggleCompleteTodo(id)}
				/>
				<label onClick={() => setIsEditing(id)}>{title}</label>
				<button className="destroy" onClick={() => deleteTodo(id)}></button>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type="text"
					value={newTitle}
					className="edit"
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleSubmit}
					onKeyDown={handleCancel}
				/>
			</form>
		</li>
	);
}

export default Todo;
