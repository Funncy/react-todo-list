import { selector } from 'recoil';
import todoFilterState from './todoFilterState';
import todoState from './todoState';

const filteredTodoListState = selector({
	key: 'filteredTodoListState',
	get: ({ get }) => {
		const filter = get(todoFilterState);
		const todoList = get(todoState);

		switch (filter) {
			case 'Completed':
				return todoList.filter(todo => todo.checked === true);
			case 'Uncompleted':
				return todoList.filter(todo => todo.checked === false);
			default:
				return todoList;
		}
	},
});

export default filteredTodoListState;
