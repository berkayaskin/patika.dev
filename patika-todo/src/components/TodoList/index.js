function TodoList({ todos, toggleCompleteTodo }) {
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>

			<ul className="todo-list">
				{todos.map((todo) => {
					return (
						<li className={todo.completed ? "completed" : ""} key={todo.id}>
							<div className="view">
								<input
									className="toggle"
									type="checkbox"
									defaultChecked={todo.completed}
									onChange={() => toggleCompleteTodo(todo.id)}
								/>
								<label>{todo.title}</label>
								<button className="destroy"></button>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default TodoList;
