import FilterButton from "../FilterButton";

function Footer({
	todosNoun,
	todosLength,
	filterNames,
	filter,
	setFilter,
	clearCompletedTodos,
	completedTodosLength,
}) {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{todosLength} </strong>
				{todosNoun} left
			</span>

			<ul className="filters">
				{filterNames.map((name) => (
					<FilterButton
						key={name}
						name={name}
						isPressed={name === filter}
						setFilter={setFilter}
					/>
				))}
			</ul>

			{completedTodosLength > 0 && (
				<button className="clear-completed" onClick={clearCompletedTodos}>
					Clear completed ({completedTodosLength})
				</button>
			)}
		</footer>
	);
}

export default Footer;
