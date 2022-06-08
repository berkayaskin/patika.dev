function TodoList({ todos }) {
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>

			<ul className="todo-list">
				{todos.map((todo) => {
					return (
						<li className={todo.done ? "completed" : ""} key={todo.id}>
							<div className="view">
								<input
									className="toggle"
									type="checkbox"
									checked={todo.completed}
									defaultChecked={false}
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
