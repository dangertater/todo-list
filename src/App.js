import React, { useState, useRef } from "react"
import TodoList from "./TodoList"

function App() {
	//prettier ignore
	let [ListOfTodos, setListofTodos] = useState([])
	const todoNameRef = useRef()
	const handleClick = (e) => {
		let name = todoNameRef.current.value
		setListofTodos((prevListOfTodos) => {
			return [
				...prevListOfTodos,
				{ id: Math.floor(Math.random() * 100), string: name, complete: false },
			]
		})
	}

	return (
		<>
			<TodoList ListOfTodos={ListOfTodos} todoNameRef={todoNameRef} />
			<input type="text" ref={todoNameRef} />
			<button onClick={handleClick}>Add Todo</button>
			<button>Erase Todos</button>
		</>
	)
}

export default App
