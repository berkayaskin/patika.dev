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
	const [isEditing, setIsEditing] = useState(false);

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

	function editTodo(id, newTitle) {
		const editedTodoList = todos.map((todo) => {
			if (todo.id === id) return { ...todo, title: newTitle };
			return todo;
		});

		setTodos(editedTodoList);
	}

	function clearCompletedTodos() {
		const remainingTodos = todos.filter((todo) => !todo.completed);
		setTodos(remainingTodos);
	}

	function markAllAsComplete() {
		const markAllCompleted = todos.map((todo) => ({
			...todo,
			completed: true,
		}));

		const markAllUncompleted = todos.map((todo) => ({
			...todo,
			completed: false,
		}));

		if (todos.some((todo) => !todo.completed)) {
			setTodos(markAllCompleted);
		} else {
			setTodos(markAllUncompleted);
		}
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
				isEditing={isEditing}
				setIsEditing={setIsEditing}
				editTodo={editTodo}
				markAllAsComplete={markAllAsComplete}
				uncompletedTodosLength={uncompletedTodosLength}
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
					markAllAsComplete={markAllAsComplete}
				/>
			)}
		</div>
	);
}

export default App;
