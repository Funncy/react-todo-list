import React, { Component } from 'react';
import './TodoItem.css';
import TodoContext from './TodoContext';

// class TodoItem extends Component {
// 	static contextType = TodoContext;

// 	shouldComponentUpdate(nextProps, nextState) {
// 		return this.props.checked !== nextProps.checked;
// 	}

// 	render() {
// 		const { text, checked, id, color, onToggle, onRemove } = this.props;
// 		// const { onToggle, onRemove } = this.context;
// console.log(`rerendering TodoItem ${id} `);
// 		return (
// 			<div className="todo-item" onClick={() => onToggle(id)}>
// 				<div
// 					className="remove"
// 					onClick={e => {
// 						e.stopPropagation(); //onToggle 실행 방지
// 						onRemove(id);
// 					}}
// 				>
// 					&times;
// 				</div>
// 				<div className={`todo-text ${checked && 'checked'}`}>
// 					<div style={{ color: color }}>{text}</div>
// 				</div>
// 				{checked && <div className="check-mart">✓</div>}
// 			</div>
// 		);
// 	}
// }

const TodoItem = React.memo(function TodoItem({ text, checked, id, color, onToggle, onRemove }) {
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
});

export default TodoItem;
