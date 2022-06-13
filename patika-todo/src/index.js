import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const data = [
	{ id: "todo-0", title: "Eat", completed: true },
	{ id: "todo-1", title: "Sleep", completed: false },
	{ id: "todo-2", title: "Repeat", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App initialTodos={data} />
	</React.StrictMode>
);
