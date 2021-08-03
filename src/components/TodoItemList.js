import React from 'react';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import filteredTodoListState from '../recoil/filteredTodoListState';

function TodoItemList() {
	const todos = useRecoilValue(filteredTodoListState);
	console.log(`odoItemList ${todos}`);
	const todoList = todos.map(({ id, text, checked, color }) => (
		<TodoItem id={id} text={text} checked={checked} color={color} key={id} />
	));
	return <div>{todoList}</div>;
}

export default TodoItemList;
