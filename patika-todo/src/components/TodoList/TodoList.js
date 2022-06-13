import Todo from "../Todo";

function TodoList({ todos, toggleCompleteTodo, deleteTodo }) {
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>

			<ul className="todo-list">
				{todos.map((todo) => (
					<Todo
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						key={todo.id}
						toggleCompleteTodo={toggleCompleteTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</ul>
		</section>
	);
}

export default TodoList;
