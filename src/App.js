import { List } from "@mui/material"
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
	//func will take the TodoList and check for complete/checked/boolean true
	//----todos and erase them

	const handleDeleteClick = () => {
		let filterList = ListOfTodos.filter(
			(unchecked) => unchecked.complete !== true
		)
		console.log(filterList)
		setListofTodos(filterList)
	}

	return (
		<>
			<TodoList ListOfTodos={ListOfTodos} todoNameRef={todoNameRef} />
			<input type="text" ref={todoNameRef} />
			<button onClick={handleClick}>Add Todo</button>
			<button onClick={handleDeleteClick}>Delete Todos</button>
		</>
	)
}

export default App
