function FilterButton({ name, selected, isPressed, setFilter }) {
	function handleSetFilter(e, name) {
		e.preventDefault(); //handle getting requires a valid href attribute error
		setFilter(name);
	}

	return (
		<li>
			<a
				role="button"
				href="/"
				className={isPressed ? "selected" : undefined}
				aria-pressed={isPressed}
				onClick={(e) => handleSetFilter(e, name)}
			>
				{name}
			</a>
		</li>
	);
}

export default FilterButton;
