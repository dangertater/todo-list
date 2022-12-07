import React from "react"

export default function Todo(props) {
	return (
		<div>
			<label>
				<input type="checkbox" checked={props.todo.complete} />
				{props.todo.string}
			</label>
		</div>
	)
}
