import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoContext from './TodoContext';

class TodoItemList extends Component {
	static contextType = TodoContext;

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.todos !== nextProps.todos;
	}

	render() {
		const { todos } = this.context;

		const todoList = todos.map(({ id, text, checked, color }) => (
			<TodoItem id={id} text={text} checked={checked} color={color} key={id} />
		));

		return <div>{todoList}</div>;
	}
}

export default TodoItemList;
