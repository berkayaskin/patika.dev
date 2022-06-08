import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
	const [todos, setTodos] = useState([]);

	return (
		<div className="todoapp">
			<TodoForm allTodos={todos} addTodo={setTodos} />
			<TodoList todos={todos} />

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
