import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoContext from './TodoContext';

class TodoItemList extends Component {
	static contextType = TodoContext;

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.props.todos !== nextProps.todos;
	// }

	render() {
		console.log(`rerendering TodoList `);
		const { todos } = this.context;
		const { onRemove, onToggle } = this.props;
		const todoList = todos.map(({ id, text, checked, color }) => (
			<TodoItem
				id={id}
				text={text}
				onRemove={onRemove}
				onToggle={onToggle}
				checked={checked}
				color={color}
				key={id}
			/>
		));

		return <div>{todoList}</div>;
	}
}

export default TodoItemList;
