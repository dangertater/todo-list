import React from "react"

export default function Todo(props) {
	let handleCheckboxClick = (e) => {
		if (props.todo.complete) {
			props.todo.complete = false
		} else {
			props.todo.complete = true
		}
	}

	return (
		<div>
			<label>
				<input
					type="checkbox"
					//checked={props.todo.complete}
					onClick={handleCheckboxClick}
				/>
				{props.todo.string}
			</label>
		</div>
	)
}
