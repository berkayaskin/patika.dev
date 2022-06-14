import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const FILTER_MAP = {
	All: () => true,
	Active: (todo) => !todo.completed,
	Completed: (todo) => todo.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ initialTodos }) {
	const [todos, setTodos] = useState(initialTodos);
	const [filter, setFilter] = useState("All");

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

	function deleteTodo(id) {
		const remainingTodos = todos.filter((todo) => id !== todo.id);
		setTodos(remainingTodos);
	}

	function clearCompletedTodos() {
		const remainingTodos = todos.filter((todo) => !todo.completed);
		setTodos(remainingTodos);
	}

	const filteredTodoList = todos.filter(FILTER_MAP[filter]); //filter todos in the UI
	const completedTodosLength = todos.filter((todo) => todo.completed).length;
	const uncompletedTodosLength = todos.filter((todo) => !todo.completed).length;
	const uncompletedTodosNoun = uncompletedTodosLength !== 1 ? "items" : "item";

	return (
		<div className="todoapp">
			<TodoForm addTodo={addTodo} />
			<TodoList
				todos={filteredTodoList}
				toggleCompleteTodo={toggleCompleteTodo}
				deleteTodo={deleteTodo}
			/>
			{todos.length > 0 && (
				<Footer
					todosNoun={uncompletedTodosNoun}
					todosLength={uncompletedTodosLength}
					filterNames={FILTER_NAMES}
					filter={filter}
					setFilter={setFilter}
					clearCompletedTodos={clearCompletedTodos}
					completedTodosLength={completedTodosLength}
				/>
			)}
		</div>
	);
}

export default App;
