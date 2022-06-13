function Todo({ id, title, completed, toggleCompleteTodo }) {
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
				<button className="destroy"></button>
			</div>
		</li>
	);
}

export default Todo;
