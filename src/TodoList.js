import React from "react"
import Todo from "./Todo"
export default function TodoList(props) {
	let TodoArray = props.ListOfTodos
	return (
		<>
			{console.log("from todo list TodoArray", TodoArray)}
			{TodoArray.map((todo) => {
				return <Todo key={todo.id} id={todo.id} todo={todo} />
			})}
		</>
	)
}
