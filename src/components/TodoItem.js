import React from 'react';
import './TodoItem.css';
import { useRecoilState } from 'recoil';
import todoState from '../recoil/todoState';

function TodoItem({ text, checked, id, color }) {
	const [todos, setTodos] = useRecoilState(todoState);

	const onToggle = id => {
		const index = todos.findIndex(todo => todo.id === id);
		const selected = todos[index];

		const nextTodos = [...todos];

		nextTodos[index] = {
			...selected,
			checked: !selected.checked,
		};

		setTodos(nextTodos);
	};

	const onRemove = id => {
		console.log(todos);
		const newTodos = todos.filter(todo => todo.id !== id);
		console.log(newTodos);
		setTodos(newTodos);
		console.log(todos);
	};

	console.log(`rerendering TodoItem ${id} `);
	return (
		<div className="todo-item" onClick={() => onToggle(id)}>
			<div
				className="remove"
				onClick={e => {
					e.stopPropagation(); //onToggle 실행 방지
					onRemove(id);
				}}
			>
				&times;
			</div>
			<div className={`todo-text ${checked && 'checked'}`}>
				<div style={{ color: color }}>{text}</div>
			</div>
			{checked && <div className="check-mart">✓</div>}
		</div>
	);
}

export default TodoItem;
