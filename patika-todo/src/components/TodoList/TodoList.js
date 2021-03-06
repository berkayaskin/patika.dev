import Todo from "../Todo";

function TodoList({
	todos,
	toggleCompleteTodo,
	deleteTodo,
	isEditing,
	setIsEditing,
	editTodo,
	markAllAsComplete,
}) {
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all" onClick={markAllAsComplete}>
				Mark all as complete
			</label>

			<ul className="todo-list">
				{todos.map((todo) => (
					<Todo
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						key={todo.id}
						toggleCompleteTodo={toggleCompleteTodo}
						deleteTodo={deleteTodo}
						isEditing={isEditing === todo.id}
						setIsEditing={setIsEditing}
						editTodo={editTodo}
					/>
				))}
			</ul>
		</section>
	);
}

export default TodoList;
