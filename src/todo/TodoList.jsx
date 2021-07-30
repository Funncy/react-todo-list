import React from 'react';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import todoState from '../todoState';

const TodoList = () => {
	const todoList = useRecoilValue(todoState);
	console.log(`todoList ${todoList}`);
	return (
		<>
			<TodoItemCreator />

			{todoList.map(todoItem => (
				<TodoItem key={todoItem.id} item={todoItem} />
			))}
		</>
	);
};

export default TodoList;
