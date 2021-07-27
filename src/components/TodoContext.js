import { createContext } from 'react';

const TodoContext = createContext({
	todos: [],
	onToggle: () => {},
	onRemove: () => {},
});

export default TodoContext;
