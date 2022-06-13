import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App({ initialTodos }) {
	const [todos, setTodos] = useState(initialTodos);

	function addTodo(title) {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		};

		setTodos([...todos, newTodo]);
	}

	function toggleCompleteTodo(id) {
		const updatedTodo = todos.map((todo) => {
			if (todo.id === id) return { ...todo, completed: !todo.completed };
			return todo;
		});

		setTodos(updatedTodo);
	}

	return (
		<div className="todoapp">
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} toggleCompleteTodo={toggleCompleteTodo} />

			<footer className="footer">
				<span className="todo-count">
					<strong>2 </strong>
					items left
				</span>

				<ul className="filters">
					<li>
						<a href="/" className="selected">
							All
						</a>
					</li>
					<li>
						<a href="/">Active</a>
					</li>
					<li>
						<a href="/">Completed</a>
					</li>
				</ul>

				<button className="clear-completed">Clear completed</button>
			</footer>
		</div>
	);
}

export default App;
