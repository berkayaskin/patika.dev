function Todo({ id, title, completed, toggleCompleteTodo, deleteTodo }) {
	return (
		<li className={completed ? "completed" : ""} key={id}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					defaultChecked={completed}
					onChange={() => toggleCompleteTodo(id)}
				/>
				<label>{title}</label>
				<button className="destroy" onClick={() => deleteTodo(id)}></button>
			</div>
		</li>
	);
}

export default Todo;
